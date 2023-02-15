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


	@OneToMany(mappedBy = "manager")
	@JsonManagedReference
	List<Request> request;
	
	@OneToMany(mappedBy = "resource")
	@JsonManagedReference
	List<Request> requestuser;

	@OneToMany(mappedBy = "projectResource")
	@JsonBackReference
	List<UserProjectRelation> resourceProjects;
	
	public User() {
		
	}

	public User(int userId, String name, String email, String password, Boolean isActive, List<Project> projects,
			List<WorkingHours> workinghours, List<Request> request, List<Request> requestuser,
			List<UserProjectRelation> porjects) {
		super();
		this.userId = userId;
		this.name = name;
		this.email = email;
		this.password = password;
		this.isActive = isActive;
		this.projects = projects;
		this.workinghours = workinghours;
		this.request = request;
		this.requestuser = requestuser;
		this.resourceProjects = porjects;
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

	public List<Request> getRequest() {
		return request;
	}

	public void setRequest(List<Request> request) {
		this.request = request;
	}

	public List<Request> getRequestuser() {
		return requestuser;
	}

	public void setRequestuser(List<Request> requestuser) {
		this.requestuser = requestuser;
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
				+ ", isActive=" + isActive + ", projects=" + projects + ", workinghours=" + workinghours + ", request="
				+ request + ", requestuser=" + requestuser + ", resourceProjects=" + resourceProjects + "]";
	}


}
