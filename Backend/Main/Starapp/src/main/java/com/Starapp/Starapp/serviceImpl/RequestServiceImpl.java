package com.Starapp.Starapp.serviceImpl;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.FormatStyle;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.Starapp.Starapp.Entities.WorkingHours;
import com.Starapp.Starapp.dto.request.OvertimeRequest;
import com.Starapp.Starapp.dto.response.ManagerRequest;
import com.Starapp.Starapp.dto.response.RequestHistory;
import com.Starapp.Starapp.dto.response.ResourceRequest;
import com.Starapp.Starapp.repo.UserProjectRelationRepository;
import com.Starapp.Starapp.repo.UserRepository;
import com.Starapp.Starapp.repo.WorkingHoursRepository;
import com.Starapp.Starapp.service.RequestService;
import org.springframework.http.HttpStatus;
import java.time.temporal.ChronoUnit;

@Service
public class RequestServiceImpl implements RequestService{
	@Autowired
	WorkingHoursRepository workRepo;
	
	@Autowired
	UserRepository userRepo;
	
	@Autowired
	UserProjectRelationRepository userProjectRelation;

	
	@Override
	public List<ManagerRequest> getAllResourceRequestForManager(String email) {
		Long id = userRepo.findByEmail(email).orElse(null).getUserId();
  		List<ManagerRequest> data = new ArrayList<>();
  		List<WorkingHours> workingHours = workRepo.WorkingHoursOfResourcesForManagerId(id); 
  		for (WorkingHours employeeWH: workingHours) {
  			Long resourceId = employeeWH.getUser().getUserId();
  			String projectId = employeeWH.getProject().getProjectId();
  			Integer expectedHour = userProjectRelation.getExpectedWorkingHourOfResource(resourceId, projectId);
  			if (employeeWH.getHours() > expectedHour) {
  				ManagerRequest user = new ManagerRequest();
  				user.setId(employeeWH.getWorkingHourId());
  				user.setUserId(resourceId);
  				user.setTimesheetNo(employeeWH.getTimesheetNo());
  				user.setName(employeeWH.getUser().getName());
  				user.setProjectName(employeeWH.getProject().getProjectName());
  				//
  				LocalDateTime PeriodStart = employeeWH.getPeriodStart();
  				DateTimeFormatter.ofLocalizedDateTime(FormatStyle.MEDIUM);
				user.setPeriodStart( DateTimeFormatter.ofPattern("dd-MMM-yyyy")
  	  				  .format(PeriodStart));
  				
  				LocalDateTime PeriodEnd = employeeWH.getPeriodEnd();
				user.setPeriodEnd(DateTimeFormatter.ofPattern("dd-MMM-yyyy")
    	  				  .format(PeriodEnd));
  		    	user.setHours(employeeWH.getHours());
  				user.setExpectedHours(expectedHour);
  				data.add(user);
  			}
  		}
  		return data;
	}

	@Override
	public List<ResourceRequest> getAllResourceRequest(String email) {
		Long id = userRepo.findByEmail(email).orElse(null).getUserId();
  		List<ResourceRequest> requests = new ArrayList<>();
  		List<WorkingHours> workingHoursData = workRepo.GetAllWorkingHoursOfResouseById(id);
  		for (WorkingHours employeeWH: workingHoursData) {
  			Long resourceId = employeeWH.getUser().getUserId();
  			String projectId = employeeWH.getProject().getProjectId();
  			Integer expectedHour = userProjectRelation.getExpectedWorkingHourOfResource(resourceId, projectId);
  			if (employeeWH.getHours() > expectedHour) {
	  			ResourceRequest request = new ResourceRequest();
	  			request.setWorkingHourId(employeeWH.getWorkingHourId());
	  			request.setProjectName(employeeWH.getProject().getProjectName());
	  			request.setManagerName(employeeWH.getProject().getManagerUser().getName());
	  			
	  			LocalDateTime PeriodStart = employeeWH.getPeriodStart();
				request.setStartTime(DateTimeFormatter.ofPattern("dd-MMM-yy")
  	  				  .format(PeriodStart));
  				LocalDateTime PeriodEnd = employeeWH.getPeriodEnd();
  		    	request.setEndTime(DateTimeFormatter.ofPattern("dd-MMM-yy")
    	  				  .format(PeriodEnd));
	  				
	  			request.setTimesheetNo(employeeWH.getTimesheetNo());
	  			request.setExtraHours(employeeWH.getHours());
	  			if(employeeWH.getIsActive()) {
	  				request.setStatus("Pending");
	  				request.setResponseText("Response Awaited");
	  			} else {
	  				if (employeeWH.getIsApproved()) {
	  					request.setStatus("Approved");
	  				} else {
	  					request.setStatus("Rejected");
	  				}
	  				request.setResponseText(employeeWH.getResponseText());
	  			}
	  			requests.add(request);
  			}
  		}
		return requests; 
	}
	
	@Transactional
	public ResponseEntity<String> updateRequest(OvertimeRequest overtimeReq) {
  		WorkingHours workingHour = workRepo.findById(overtimeReq.getId()).orElse(null);
  		if (workingHour == null) return new ResponseEntity<>("Payload Insufficient", HttpStatus.NO_CONTENT);
  		if (workingHour.getIsActive() == false) return new ResponseEntity<>("Bad Request", HttpStatus.BAD_REQUEST);
  		if (overtimeReq == null || overtimeReq.getResponseText() == null) return new ResponseEntity<>("Data Insufficient", HttpStatus.BAD_REQUEST);
  		if (workingHour.getIsActive() == true) workingHour.setApprovedOn(LocalDateTime.now());
  		workingHour.setIsActive(false);
  		workingHour.setIsApproved(overtimeReq.getIsApproved());
  		workingHour.setResponseText(overtimeReq.getResponseText());
  		workRepo.save(workingHour);
  		return new ResponseEntity<>("saved", HttpStatus.CREATED); 
	}

	public List<RequestHistory> getAllHistory(String email) {
		Long id = userRepo.findByEmail(email).orElse(null).getUserId();
  		List<RequestHistory> data = new ArrayList<>();
  		List<WorkingHours> workingHours = workRepo.HistoryOfRequestsForManagerId(id); 
  		for (WorkingHours employeeWH: workingHours) {
  			Long resourceId = employeeWH.getUser().getUserId();
//  			String projectId = employeeWH.getProject().getProjectId();
  				RequestHistory history = new RequestHistory();
  				history.setId(employeeWH.getWorkingHourId());
  				history.setUserId(resourceId);
  				history.setTimesheetNo(employeeWH.getTimesheetNo());
  				history.setName(employeeWH.getUser().getName());
  				history.setProjectName(employeeWH.getProject().getProjectName());
  				LocalDateTime PeriodStart = employeeWH.getPeriodStart();
  				DateTimeFormatter.ofLocalizedDateTime(FormatStyle.MEDIUM);
				history.setPeriodStart(DateTimeFormatter.ofPattern("dd-MMM-yy").format(PeriodStart));
  				LocalDateTime PeriodEnd = employeeWH.getPeriodEnd();
				history.setPeriodEnd(DateTimeFormatter.ofPattern("dd-MMM-yy").format(PeriodEnd));
  				history.setHours(employeeWH.getHours());
  				if (employeeWH.getIsApproved()) history.setStatus("Approved");
  				else history.setStatus("Rejected");
  				history.setResponseText(employeeWH.getResponseText());
  				Long days = ChronoUnit.DAYS.between(employeeWH.getApprovedOn(), LocalDateTime.now());
  				if (days<=7) history.setCanChange(true);
  				data.add(history);
  		}
  		return data;
	}

}
