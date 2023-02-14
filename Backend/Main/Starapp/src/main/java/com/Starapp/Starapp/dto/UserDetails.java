package com.Starapp.Starapp.dto;
import java.util.List;

public class UserDetails {
	private int userId;
	private String username;
	private String email;
	private List<String> projects;
	private List<String> vertical;
	private List<String> horizontal;
	private List<String> subHorizontal;
	
	public UserDetails() {
		
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
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
