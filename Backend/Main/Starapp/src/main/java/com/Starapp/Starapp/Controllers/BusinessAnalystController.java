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

import com.Starapp.Starapp.Entities.BusinessAnalyst;
import com.Starapp.Starapp.repo.BusinessAnalystRepository;

@RestController
@RequestMapping("/api/v1/BusinessAnalyst")
public class BusinessAnalystController {
	@Autowired
	BusinessAnalystRepository businessAnalystRepository;
	 
	 @PostMapping("/")
		public ResponseEntity<Void> addBusinessAnalyst(@RequestBody BusinessAnalyst businessAnalyst) {

			System.out.println("In addproject" + businessAnalyst);		
			businessAnalystRepository.save(businessAnalyst);
			ResponseEntity<Void> re = new ResponseEntity<>(HttpStatus.CREATED);
			return re;
		
		}
		@GetMapping("/")
		public List<BusinessAnalyst> fetchAllBusinessAnalyst(){
			return businessAnalystRepository.findAll();
		}
}
