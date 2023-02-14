package com.Starapp.Starapp.Entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class UserProjectRelation {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int relationId;
	int expectedHours;
	//foreign key
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "projectId",referencedColumnName = "projectId")
	@JsonBackReference
	Project userProject;
	
	//foreign key
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "resourceId",referencedColumnName="userId")
	@JsonBackReference
	User userproj;

	public UserProjectRelation() {
		
	}
	public int getRelationId() {
		return relationId;
	}

	public void setRelationId(int relationId) {
		this.relationId = relationId;
	}

	public int getExpectedHours() {
		return expectedHours;
	}

	public void setExpectedHours(int expectedHours) {
		this.expectedHours = expectedHours;
	}

	public Project getUserProject() {
		return userProject;
	}

	public void setUserProject(Project userProject) {
		this.userProject = userProject;
	}

	public User getUserproj() {
		return userproj;
	}

	public void setUserproj(User userproj) {
		this.userproj = userproj;
	}

	public UserProjectRelation(int relationId, int expectedHours, Project userProject, User userproj) {
		this.relationId = relationId;
		this.expectedHours = expectedHours;
		this.userProject = userProject;
		this.userproj = userproj;
	}
	@Override
	public String toString() {
		return "UserProjectRelation [relationId=" + relationId + ", expectedHours=" + expectedHours + ", userProject="
				+ userProject + ", userproj=" + userproj + "]";
	}




	
}
