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

import com.Starapp.Starapp.Entities.WorkingHours;
import com.Starapp.Starapp.repo.WorkingHoursRepository;

@RestController
@RequestMapping("/api/v1/WorkingHours")
public class WorkingHoursController {

	 @Autowired
	 WorkingHoursRepository workingHoursRepository;
	 
	 @PostMapping("/")
		public ResponseEntity<Void> addWorkingHours(@RequestBody WorkingHours workingHours) {

			System.out.println("In addworkingHours" + workingHours);		
			workingHoursRepository.save(workingHours);
			ResponseEntity<Void> re = new ResponseEntity<>(HttpStatus.CREATED);
			return re;
		
		}
		@GetMapping("/")
		public List<WorkingHours> fetchAllWorkingHours(){
			return workingHoursRepository.findAll();
		}
	
}
