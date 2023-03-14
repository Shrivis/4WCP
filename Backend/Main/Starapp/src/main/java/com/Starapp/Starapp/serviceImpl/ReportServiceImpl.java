package com.Starapp.Starapp.serviceImpl;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Starapp.Starapp.Entities.WorkingHours;
import com.Starapp.Starapp.dto.response.HorizontalData;
import com.Starapp.Starapp.dto.response.MyPair;
import com.Starapp.Starapp.repo.ProjectRepository;
import com.Starapp.Starapp.repo.UserProjectRelationRepository;
import com.Starapp.Starapp.repo.WorkingHoursRepository;
import com.Starapp.Starapp.service.ReportService;

@Service
public class ReportServiceImpl implements ReportService {
	@Autowired
	ProjectRepository projectRepo;
	
	@Autowired
	WorkingHoursRepository whRepo;
	
	@Autowired
	UserProjectRelationRepository userProjectRelation;
	
	@Override
	public HorizontalData getHorizontalsReports() {
		List<String> horizontals = projectRepo.getAllUniqueHorizontals();
		List<Integer> over = new ArrayList<>();
		List<Integer> under = new ArrayList<>();
		Map<String, MyPair> projectData = new HashMap<>();
		Map<String, Integer> managers = new HashMap<>();
		for (String horizontal: horizontals) {
			List<WorkingHours> allWH = whRepo.getAllDataForHorizontal(horizontal);
			Integer overCount = 0;
			Integer underCount = 0;
			for (WorkingHours wh: allWH) {
				Long resourceId = wh.getUser().getUserId();
	  			String projectId = wh.getProject().getProjectId();
	  			Integer expectedHour = userProjectRelation.getExpectedWorkingHourOfResource(resourceId, projectId);
	  			if (wh.getHours() > expectedHour) {
	  				overCount += wh.getHours() - expectedHour;
	  			} else {
	  				underCount += expectedHour - wh.getHours();
	  			}				
	  			if (horizontal.equals("Delivery")) {
					String name = wh.getProject().getProjectName();
	            	MyPair newItem = new MyPair();	
		            if (projectData.containsKey(name)) {
		            	if (wh.getHours() > expectedHour) {
		            		newItem.setFirst(projectData.get(name).getFirst() + wh.getHours()-expectedHour);
			            	newItem.setSecond(projectData.get(name).getSecond());
		            	}
		            	else {
		            		newItem.setFirst(projectData.get(name).getFirst() );
			            	newItem.setSecond(projectData.get(name).getSecond() + expectedHour - wh.getHours());
		            	}
	            		projectData.put(name, newItem);
		            }
		            else {

		            	if (wh.getHours() > expectedHour) {
		            		newItem.setFirst(wh.getHours()-expectedHour);
		            	} else {
		            		newItem.setSecond(expectedHour-wh.getHours());
		            	}
		            	projectData.put(name, newItem);
		            }
		            if (wh.getHours() > expectedHour) {
			            String managerName = wh.getProject().getManagerUser().getName();
			            if (managers.containsKey(managerName)) {
			            	managers.put(managerName, managers.get(managerName) +  wh.getHours()-expectedHour);
			            }
			            else {
			            	managers.put(managerName, wh.getHours()-expectedHour);
			            }
		            }
		            
				}
			}
			over.add(overCount);
			under.add(underCount);
		}
		HorizontalData data = new HorizontalData();
		data.setHorizontals(horizontals);
		data.setOverUtilizedHours(over);
		data.setUnderUtilizedHours(under);
		data.setData(projectData);
		data.setManagers(managers);
		return data;
	}
	
}
