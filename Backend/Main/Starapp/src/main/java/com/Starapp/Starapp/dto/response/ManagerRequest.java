package com.Starapp.Starapp.dto.response;

import java.time.LocalDateTime;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ManagerRequest {
	private Long id; 
	private String name;
	private String projectName;	
	private LocalDateTime periodStart;
	private LocalDateTime periodEnd;
	private Integer hours;
	private Integer expectedHours;		
}
