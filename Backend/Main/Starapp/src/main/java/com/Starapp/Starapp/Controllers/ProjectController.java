package com.Starapp.Starapp.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Starapp.Starapp.Entities.Project;
import com.Starapp.Starapp.repo.ProjectRepository;

@RestController
@RequestMapping("/api/v1/Project")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProjectController {
	 @Autowired
	 ProjectRepository projectRepository;
	 
	 @PostMapping("/")
	 public ResponseEntity<Void> addProject(@RequestBody Project project) {

		System.out.println("In addproject" + project);		
		projectRepository.save(project);
		ResponseEntity<Void> re = new ResponseEntity<>(HttpStatus.CREATED);
		return re;
	
	}
	@GetMapping("/")
	public List<Project> fetchAllProject(){
		return projectRepository.findAll();
	}
}
