package com.Starapp.Starapp.dto.response;

import java.util.List;

import lombok.Data; //it automatically creates getters and setters and constructors for this class

@Data
public class ProjectData {
	List<String> name;
	List<Integer> hours;

}
