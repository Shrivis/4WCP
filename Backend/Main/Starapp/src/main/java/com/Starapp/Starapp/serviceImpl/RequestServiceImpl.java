package com.Starapp.Starapp.serviceImpl;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.Starapp.Starapp.Entities.WorkingHours;
import com.Starapp.Starapp.dto.request.OvertimeRequest;
import com.Starapp.Starapp.dto.response.ManagerRequest;
import com.Starapp.Starapp.dto.response.ResourceRequest;
import com.Starapp.Starapp.repo.UserProjectRelationRepository;
import com.Starapp.Starapp.repo.UserRepository;
import com.Starapp.Starapp.repo.WorkingHoursRepository;
import com.Starapp.Starapp.service.RequestService;
import org.springframework.http.HttpStatus;

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
  				user.setPeriodStart(employeeWH.getPeriodStart());
  				user.setPeriodEnd(employeeWH.getPeriodEnd());
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
	  			request.setStartTime(employeeWH.getPeriodStart());
	  			request.setEndTime(employeeWH.getPeriodEnd());
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
	
//	@Transactional
	public ResponseEntity<String> updateRequest(OvertimeRequest overtimeReq) {
  		WorkingHours workingHour = workRepo.findById(overtimeReq.getId()).orElse(null);
  		if (workingHour == null) return new ResponseEntity<>("Payload Insufficient", HttpStatus.NO_CONTENT);
  		if (workingHour.getIsActive() == false) return new ResponseEntity<>("Bad Request", HttpStatus.BAD_REQUEST);
  		if (overtimeReq == null || overtimeReq.getResponseText() == null) return new ResponseEntity<>("Data Insufficient", HttpStatus.BAD_REQUEST);
  		workingHour.setIsActive(false);
  		workingHour.setIsApproved(overtimeReq.getIsApproved());
  		workingHour.setCreatedOn(LocalDateTime.now());
  		workingHour.setResponseText(overtimeReq.getResponseText());
  		workRepo.save(workingHour);
  		return new ResponseEntity<>("saved", HttpStatus.CREATED); 
	}

}
