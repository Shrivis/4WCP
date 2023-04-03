package com.Starapp.Starapp.Controllers;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Starapp.Starapp.dto.request.MailContent;
import com.Starapp.Starapp.dto.request.OvertimeRequest;
import com.Starapp.Starapp.dto.response.ManagerRequest;
import com.Starapp.Starapp.dto.response.RequestHistory;
import com.Starapp.Starapp.dto.response.ResourceRequest;
import com.Starapp.Starapp.serviceImpl.MailServiceImpl;
import com.Starapp.Starapp.serviceImpl.RequestServiceImpl;

// This annotation marks this class as a REST controller that handles requests at "/api/v1/request".
@RestController
@RequestMapping("/api/v1/request")
public class RequestController {

 // These annotations inject RequestServiceImpl and MailServiceImpl as dependencies.
	@Autowired
	RequestServiceImpl requestService;
	@Autowired
	MailServiceImpl mailService;

// This method maps GET requests to "/api/v1/request/manager" and returns a list of ManagerRequest objects.
  	@GetMapping("/manager")
  	public List<ManagerRequest> getAllManagerRequst(Principal principal) {
  		return requestService.getAllResourceRequestForManager(principal.getName());
  	}
// This method maps GET requests to "/api/v1/request/resource" and returns a list of ResourceRequest objects.
  	@GetMapping("/resource")
  	public List<ResourceRequest> getAllRequests(Principal principal) {
		return requestService.getAllResourceRequest(principal.getName());  		
  	}
 // This method maps GET requests to "/api/v1/request/history" and returns a list of RequestHistory objects.  	
  	@GetMapping("/history")
  	public List<RequestHistory> getAllManagerRequestHistory(Principal principal) {
  		return requestService.getAllHistory(principal.getName());
  	}
 // This method maps POST requests to "/api/v1/request/manager" and returns an HTTP response entity containing a status string.	
  	@PostMapping("/manager")
  	public ResponseEntity<String> approvRejectRequsts(@RequestBody OvertimeRequest overtimeReq) {
  		return requestService.updateRequest(overtimeReq);
  	} 
 // This method maps POST requests to "/api/v1/request/sendmail" and returns an HTTP response entity containing a status string.	
  	@PostMapping("/sendmail")
  	public ResponseEntity<String> sendMail(@RequestBody MailContent mailContent){
  		return mailService.sendMail(mailContent);
  	}
	 
}
