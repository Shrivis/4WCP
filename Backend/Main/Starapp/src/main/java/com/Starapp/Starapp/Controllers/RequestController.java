package com.Starapp.Starapp.Controllers;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Starapp.Starapp.dto.response.ManagerRequest;
import com.Starapp.Starapp.dto.response.ResourceRequest;
import com.Starapp.Starapp.serviceImpl.RequestServiceImpl;

@RestController
@RequestMapping("/api/v1/request")
public class RequestController {
	@Autowired
	RequestServiceImpl requestService;
	
  	@GetMapping("/manager")
  	public List<ManagerRequest> getAllManagerRequst(Principal principal) {
  		System.out.println("/managerHit");
  		return requestService.getAllResourceRequestForManager(principal.getName());
  	}
  	
  	@GetMapping("/resource")
  	public List<ResourceRequest> GetAllRequests(Principal principal) {
  		System.out.println("/resourceHit");
		return requestService.getAllResourceRequest(principal.getName());  		
  	}
	 
}
