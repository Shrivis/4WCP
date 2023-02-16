package com.Starapp.Starapp.Entities;

import java.time.LocalDateTime;

//import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.OneToOne;

@Entity
public class WorkingHoursArchieve {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int workingHourArchieveId;
	
//	//foreign key
//  	@OneToOne(cascade = CascadeType.ALL)	
//  	@JoinColumn(name = "workingHourId", referencedColumnName="workingHourId")
//  	WorkingHours workinghours;
  	
  	int timesheetNo;
    LocalDateTime periodStart;
    LocalDateTime periodEnd;
    int projectId;
    int resourceId;
 	int hours;
   	Boolean isActive;
   	LocalDateTime createdOn;
   	Boolean isApproved;

     
 	
  	
  	
	
	
}
