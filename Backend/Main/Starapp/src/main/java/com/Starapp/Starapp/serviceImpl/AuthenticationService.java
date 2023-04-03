package com.Starapp.Starapp.serviceImpl;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import com.Starapp.Starapp.dto.request.AuthenticationRequest;
import com.Starapp.Starapp.dto.response.AuthenticationResponse;
import com.Starapp.Starapp.repo.UserRepository;

import lombok.RequiredArgsConstructor;

@Service // java spring boot service 
@RequiredArgsConstructor // annotation to add argrument based constructors 
public class AuthenticationService {
  private final UserRepository repository;
  private final JwtService jwtService;
  private final AuthenticationManager authenticationManager;
  /**
   * Authenticates a user based on the provided request credentials.
   *
   * @param request the authentication request containing the user's email and password
   * @return an authentication response containing a JWT token
   */
  public AuthenticationResponse authenticate(AuthenticationRequest request) {
    // Authenticate the user
    authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(
            request.getEmail(),
            request.getPassword()
        )
    );
     // Find the user in the repository by email
    var user = repository.findByEmail(request.getEmail()).orElseThrow();
    // Generate a JWT token for the user
    var jwtToken = jwtService.generateToken(user);
    // Return an authentication response containing the JWT token
    return AuthenticationResponse.builder()
        .token(jwtToken)
        .build();
  }
}
