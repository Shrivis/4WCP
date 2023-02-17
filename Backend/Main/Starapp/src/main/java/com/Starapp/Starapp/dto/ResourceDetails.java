package com.Starapp.Starapp.dto;
import java.util.List;

public class ResourceDetails {
	private int userId;
	private String name;
	private String email;
	private List<String> projects;
	private List<String> vertical;
	private List<String> horizontal;
	private List<String> subHorizontal;
	
	public ResourceDetails() {
		
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
	public List<String> getProjects() {
		return projects;
	}
	public void setProjects(List<String> projects) {
		this.projects = projects;
	}
	public List<String> getVertical() {
		return vertical;
	}
	public void setVertical(List<String> vertical) {
		this.vertical = vertical;
	}
	public List<String> getHorizontal() {
		return horizontal;
	}
	public void setHorizontal(List<String> horizontal) {
		this.horizontal = horizontal;
	}
	public List<String> getSubHorizontal() {
		return subHorizontal;
	}
	public void setSubHorizontal(List<String> subHorizontal) {
		this.subHorizontal = subHorizontal;
	}
	
}
