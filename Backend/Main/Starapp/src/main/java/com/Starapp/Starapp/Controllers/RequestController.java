package com.Starapp.Starapp.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Starapp.Starapp.Entities.Request;
import com.Starapp.Starapp.repo.RequestRepository;

@RestController
@RequestMapping("/api/v1/Request")
public class RequestController {
	@Autowired
    RequestRepository requestRepository;

	@PostMapping("/")
	public ResponseEntity<Void> addRequest(@RequestBody Request request) {
	
		System.out.println("In addrequest" + request);		
		requestRepository.save(request);
		ResponseEntity<Void> re = new ResponseEntity<>(HttpStatus.CREATED);
		return re;
	
	}
	 
//	 @GetMapping("/{id}")
//	 public UserRequests GetAllRequest(@PathVariable int id) {  
//		 UserRequests data = new UserRequests();
//		 List<Project> projects = projectRepository.allProjectWhereManagerIs(id);
//		 List<User> resource = new ArrayList<>();    
//		 for (Project project: projects) {
//			 UserProjectRelation relation = project.getUserprojectrelation();
//			 resource.addAll(relation)
//		 }
//	    
//	    	
//		 return data;
//	 }
	 
		@GetMapping("/")
		public List<Request> fetchAllRequest(){
			return requestRepository.findAll();
		}
}
