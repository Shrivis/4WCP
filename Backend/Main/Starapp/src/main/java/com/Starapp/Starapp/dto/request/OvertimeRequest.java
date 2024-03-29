package com.Starapp.Starapp.dto.request;

// These lines import the Lombok's annotations to automatically generate getters, setters, constructors and toString methods on this class.
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OvertimeRequest {
	private Long id;
	private Long userId;
	private String responseText;
	private Boolean isApproved;
}
