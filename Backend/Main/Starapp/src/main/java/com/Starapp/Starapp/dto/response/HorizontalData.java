package com.Starapp.Starapp.dto.response;

import java.util.List;
import java.util.Map;

import lombok.Data;

@Data // generates getters, setters and toString for all fields in the class
public class HorizontalData {
	List<String> horizontals;
	List<Integer> overUtilizedHours;
	List<Integer> underUtilizedHours;
	Map<String, MyPair> data;
	Map<String, Integer> managers;
	
}
