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

import com.Starapp.Starapp.Entities.User;
import com.Starapp.Starapp.repo.UserRepository;

@RestController
@RequestMapping("/api/v1/User")
public class UserController {
  @Autowired
  UserRepository userRepository;
  
  @PostMapping("/")
	public ResponseEntity<Void> addUser(@RequestBody User user) {

		System.out.println("In adduser" + user);		
		userRepository.save(user);
		ResponseEntity<Void> re = new ResponseEntity<>(HttpStatus.CREATED);
		return re;
	
	}
	@GetMapping("/")
	public List<User> fetchAllUser(){
		return userRepository.findAll();
	}
	
}
