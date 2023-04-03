package com.Starapp.Starapp.dto.response;
// This class represents a custom class to hold two integer values i.e. first and second.
// The default value of both variables is 0 but can be changed later by assigning new values.

import lombok.Data;

@Data  // generates getters, setters and toString for all fields in the class.
public class MyPair {
	Integer first = 0;
	Integer second = 0;
	
}
