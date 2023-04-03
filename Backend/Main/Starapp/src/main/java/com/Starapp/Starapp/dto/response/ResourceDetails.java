package com.Starapp.Starapp.dto.response;// This is a DTO (Data Transfer Object) used to represent resource details for the Starapp application.
import java.util.List;

import lombok.Data;// Importing Lombok's Data annotation which will automatically generate getters/setters, constructor, equals and hashCode methods.

@Data
public class ResourceDetails {
	private Long userId;
	private String name;
	private String email;
	private List<String> projects;
	private List<String> vertical;
	private List<String> horizontal;
	private List<String> subHorizontal;	
}
