package com.Starapp.Starapp.Entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
	@JoinColumn(name = "projectId", referencedColumnName = "projectId")
	@JsonManagedReference
	Project resourceProject;
	
	//foreign key
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "resourceId", referencedColumnName="userId")
	@JsonManagedReference
	User projectResource;

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

	public Project getResourceProject() {
		return resourceProject;
	}

	public void setResourceProject(Project resourceProject) {
		this.resourceProject = resourceProject;
	}

	public User getProjectResource() {
		return projectResource;
	}

	public void setProjectResource(User projectResource) {
		this.projectResource = projectResource;
	}

	@Override
	public String toString() {
		return "UserProjectRelation [relationId=" + relationId + ", expectedHours=" + expectedHours
				+ ", resourceProject=" + resourceProject.getProjectId() + ", projectResource=" + projectResource.getUserId() + "]";
	}
	
}
