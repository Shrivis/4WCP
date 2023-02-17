package com.Starapp.Starapp.Controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Starapp.Starapp.Entities.WorkingHours;
import com.Starapp.Starapp.dto.Request;
import com.Starapp.Starapp.dto.UserRequests;
import com.Starapp.Starapp.repo.UserProjectRelationRepository;
import com.Starapp.Starapp.repo.WorkingHoursRepository;

@RestController
@RequestMapping("/api/v1/Request")
public class RequestController {
	@Autowired
	WorkingHoursRepository workingHoursRepository;
	
	@Autowired
	UserProjectRelationRepository userProjectRelation;
	
  	@GetMapping("/manager/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
  	public List<UserRequests> GetAllUserRequestForManager(@PathVariable int id) {
  		List<UserRequests> data = new ArrayList<>();
  		List<WorkingHours> workingHours = workingHoursRepository.WorkingHoursOfResourcesForManagerId(id);
  		for (WorkingHours employeeWH: workingHours) {
  			int resourceId = employeeWH.getUser().getUserId();
  			int projectId = employeeWH.getProject().getProjectId();
  			int expectedHour = userProjectRelation.getExpectedWorkingHourOfResource(resourceId, projectId);
  			if (employeeWH.getHours() > expectedHour) {
  		  		UserRequests user = new UserRequests();
  				user.setId(employeeWH.getWorkingHourId());
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
  	
  	@GetMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
  	public List<Request> GetAllRequests(@PathVariable int id) {
  		List<Request> requests = new ArrayList<>();
  		List<WorkingHours> workingHoursData = workingHoursRepository.GetAllWorkingHoursOfResouseById(id);
  		for (WorkingHours employeeWH: workingHoursData) {
  			int resourceId = employeeWH.getUser().getUserId();
  			int projectId = employeeWH.getProject().getProjectId();
  			int expectedHour = userProjectRelation.getExpectedWorkingHourOfResource(resourceId, projectId);
  			if (employeeWH.getHours() > expectedHour) {
	  			Request request = new Request();
	  			request.setWorkingHourId(employeeWH.getWorkingHourId());
	  			request.setProjectName(employeeWH.getProject().getProjectName());
	  			request.setManagerName(employeeWH.getProject().getManagerUser().getName());
	  			request.setStartTime(employeeWH.getPeriodStart());
	  			request.setEndTime(employeeWH.getPeriodEnd());
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
	 
}
