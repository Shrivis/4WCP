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

import com.Starapp.Starapp.Entities.UserProjectRelation;
import com.Starapp.Starapp.repo.UserProjectRelationRepository;

@RestController
@RequestMapping("/api/v1/UserProjectRelation")
public class UserProjectRelationController {
	 @Autowired
	 UserProjectRelationRepository userProjectRelationRepository;
	 
	 @PostMapping("/")
		public ResponseEntity<Void> addUserProjectRelation(@RequestBody  UserProjectRelation  userProjectRelation) {

			System.out.println("In addproject" + userProjectRelation);		
			userProjectRelationRepository.save(userProjectRelation);
			ResponseEntity<Void> re = new ResponseEntity<>(HttpStatus.CREATED);
			return re;
		
		}
		@GetMapping("/")
		public List<UserProjectRelation> fetchAllUserProjectRelation(){
			return userProjectRelationRepository.findAll();
		}
}
