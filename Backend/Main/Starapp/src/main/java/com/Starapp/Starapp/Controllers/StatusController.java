package com.Starapp.Starapp.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Starapp.Starapp.repo.RequestRepository;

@RestController
@RequestMapping("/api/v1/Status")
public class StatusController {
	@Autowired
	 RequestRepository requestRepository;
}
