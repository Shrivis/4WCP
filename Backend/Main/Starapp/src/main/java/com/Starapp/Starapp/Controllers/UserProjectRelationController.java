package com.Starapp.Starapp.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Starapp.Starapp.repo.UserProjectRelationRepository;

@RestController
@RequestMapping("/api/v1/UserProjectRelation")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserProjectRelationController {
	 @Autowired
	 UserProjectRelationRepository userProjectRelationRepository;
}
