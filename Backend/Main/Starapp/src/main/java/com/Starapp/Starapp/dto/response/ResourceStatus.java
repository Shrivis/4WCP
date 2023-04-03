package com.Starapp.Starapp.dto.response;

import lombok.Data;//automatically generates getters, setters, equals and hashCode methods for all fields defined in this class.

@Data
public class ResourceStatus {
	
	private Integer resourceApproved;
	private Integer resourceRejected;
	private Integer managerApproved;
	private Integer managerRejected;
}
