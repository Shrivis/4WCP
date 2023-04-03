package com.Starapp.Starapp.Controllers;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Starapp.Starapp.dto.response.ResourceDetails;
import com.Starapp.Starapp.serviceImpl.ResourceServiceImpl;

//this class  handles requests at "/api/v1/resource".
@RestController
@RequestMapping("/api/v1/resource")
public class ResourceController {
	@Autowired
	ResourceServiceImpl resourceService;
		
  //This method maps GET requests to "/api/v1/resource/data" and returns a ResourceDetails object.
	@GetMapping("/data")
  	public ResourceDetails resourceDetails(Principal principal) {
  		return resourceService.getResouceDetail(principal.getName());
  	}
	
}
