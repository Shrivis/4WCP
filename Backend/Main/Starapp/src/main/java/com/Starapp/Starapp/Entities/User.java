package com.Starapp.Starapp.Entities;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int userId;
	String name;
	String email;
	String password;
	Boolean isActive;
	
	@OneToMany(mappedBy = "managerUser")
	@JsonManagedReference
	List<Project> projects;
	
	@OneToMany(mappedBy = "user")
	@JsonManagedReference
	List<WorkingHours> workinghours;

	@OneToMany(mappedBy = "projectResource")
	@JsonBackReference
	List<UserProjectRelation> resourceProjects;
	
	public User() {
		
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Boolean getIsActive() {
		return isActive;
	}

	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}

	public List<Project> getProjects() {
		return projects;
	}

	public void setProjects(List<Project> projects) {
		this.projects = projects;
	}

	public List<WorkingHours> getWorkinghours() {
		return workinghours;
	}

	public void setWorkinghours(List<WorkingHours> workinghours) {
		this.workinghours = workinghours;
	}

	public List<UserProjectRelation> getResourceProjects() {
		return resourceProjects;
	}

	public void setResourceProjects(List<UserProjectRelation> resourceProjects) {
		this.resourceProjects = resourceProjects;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", name=" + name + ", email=" + email + ", password=" + password
				+ ", isActive=" + isActive + ", projects=" + projects + ", workinghours=" + workinghours
				+ ", resourceProjects=" + resourceProjects + "]";
	}

}
