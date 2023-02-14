package com.Starapp.Starapp.Controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Starapp.Starapp.Entities.Project;
import com.Starapp.Starapp.Entities.User;
import com.Starapp.Starapp.dto.UserDetails;
import com.Starapp.Starapp.repo.UserRepository;

@RestController
@RequestMapping("/api/v1/User")
public class UserController {
	@Autowired
	UserRepository userRepository;
  
    @PostMapping("/")
	public ResponseEntity<Void> addUser(@RequestBody User user) {	
		userRepository.save(user);
		ResponseEntity<Void> re = new ResponseEntity<>(HttpStatus.CREATED);
		return re;
	
	}
  	@GetMapping("/{id}")
  	public UserDetails GetAllUser(@PathVariable int id) {
  		UserDetails data = new UserDetails();
  		User user =  userRepository.findUserWithId(id);
  		List<String> projects = new ArrayList<>();
  		List<String> vertical = new ArrayList<>();
  		List<String> horizontal = new ArrayList<>();
  		List<String> subHorizontal = new ArrayList<>();
  		for (Project project: user.getProjects()) {
  			projects.add(project.getProjectName());
  			vertical.add(project.getVertical());
  			if (project.getHorizonatl() != null) horizontal.add(project.getHorizonatl());
  			else horizontal.add(" ");
  			subHorizontal.add(project.getSubHorizontal());
  		}
  		data.setEmail(user.getEmail());
  		data.setName(user.getName());
  		data.setUserId(user.getUserId());
  		data.setProjects(projects);
  		data.setSubHorizontal(subHorizontal);
  		data.setVertical(vertical);
  		data.setHorizontal(horizontal);
  		return data;
  	}
  	
	@GetMapping("/")
	public List<User> fetchAllUser(){
		return userRepository.findAll();
	}
	
}
