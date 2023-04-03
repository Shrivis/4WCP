package com.Starapp.Starapp.dto.response;

// These lines import the Lombok's annotations to automatically generate getters, setters, constructors and toString methods on this class.
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ManagerRequest {
	private Long id; 
	private Long userId;
	private String timesheetNo;
	private String name;
	private String projectName;	
	//Can consider converting it into java.util.Date or java.time.LocalDate if required.
	private String periodStart;
	//Can consider converting it into java.util.Date or java.time.LocalDate if required.
	private String periodEnd;
	private Integer hours;
	private Integer expectedHours;	
	private Boolean seen;
	
}
