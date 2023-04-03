package com.Starapp.Starapp.dto.request;

import lombok.Data;// This line imports the Lombok's @Data annotation to automatically generate getters, setters, constructors and toString methods on this class.

@Data
public class MailContent {
	  Long id;
      Long managerId;
      Long userId;
      private String responseText;
	  private Boolean isApproved ; 
	
	 
}
