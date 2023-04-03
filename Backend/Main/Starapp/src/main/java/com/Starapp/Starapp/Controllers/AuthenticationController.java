package com.Starapp.Starapp.Controllers;

import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Starapp.Starapp.dto.request.AuthenticationRequest;
import com.Starapp.Starapp.dto.response.AuthenticationResponse;
import com.Starapp.Starapp.serviceImpl.AuthenticationService;
// This class defines a REST API endpoint for authentication with Spring Boot.
@RestController
@RequestMapping("/api/v1/auth")

@RequiredArgsConstructor  
public class AuthenticationController {

  @Autowired
  private AuthenticationService service;
   // Defines a POST mapping for /authenticate with request body as AuthenticationRequest and  Returns an HTTP response entity with AuthenticationResponse as a body
  @PostMapping("/authenticate")
  public ResponseEntity<AuthenticationResponse> authenticate(
      @RequestBody AuthenticationRequest request
  ) {
    return ResponseEntity.ok(service.authenticate(request));
  }


}
