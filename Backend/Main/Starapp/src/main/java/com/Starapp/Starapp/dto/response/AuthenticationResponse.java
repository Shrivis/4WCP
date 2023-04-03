package com.Starapp.Starapp.dto.response;

// These lines import the Lombok's annotations to automatically generate getters, setters, constructors and toString methods on this class.
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

// This class represents the response of authentication API which contains the generated token as a property.
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
  private String token;
  // Getters and setters methods will be automatically generated through Lombok's @Data annotation.
}
