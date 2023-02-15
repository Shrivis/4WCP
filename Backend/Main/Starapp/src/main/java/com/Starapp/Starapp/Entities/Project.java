package com.Starapp.Starapp.Entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Project {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int projectId;
	
	String projectName;
	int customerId;
	String customerName;
	String vertical;
	String horizonatl;
	String subHorizontal;

//foreign key
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "managerId", referencedColumnName="userId")
	@JsonBackReference
	User managerUser;

//
	@OneToMany(mappedBy = "project")
	@JsonManagedReference
	List<WorkingHours> workinghours;

	@OneToMany(mappedBy = "resourceProject")
	@JsonBackReference
	List<UserProjectRelation> projectResources;

	public Project() {
		super();
	}

	public Project(int projectId, String projectName, int customerId, String customerName, String vertical,
			String horizonatl, String subHorizontal, User managerUser, List<WorkingHours> workinghours,
			List<UserProjectRelation> projectResources) {
		super();
		this.projectId = projectId;
		this.projectName = projectName;
		this.customerId = customerId;
		this.customerName = customerName;
		this.vertical = vertical;
		this.horizonatl = horizonatl;
		this.subHorizontal = subHorizontal;
		this.managerUser = managerUser;
		this.workinghours = workinghours;
		this.projectResources = projectResources;
	}

	public int getProjectId() {
		return projectId;
	}

	public void setProjectId(int projectId) {
		this.projectId = projectId;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getVertical() {
		return vertical;
	}

	public void setVertical(String vertical) {
		this.vertical = vertical;
	}

	public String getHorizonatl() {
		return horizonatl;
	}

	public void setHorizonatl(String horizonatl) {
		this.horizonatl = horizonatl;
	}

	public String getSubHorizontal() {
		return subHorizontal;
	}

	public void setSubHorizontal(String subHorizontal) {
		this.subHorizontal = subHorizontal;
	}

	public User getManagerUser() {
		return managerUser;
	}

	public void setManagerUser(User managerUser) {
		this.managerUser = managerUser;
	}

	public List<WorkingHours> getWorkinghours() {
		return workinghours;
	}

	public void setWorkinghours(List<WorkingHours> workinghours) {
		this.workinghours = workinghours;
	}

	public List<UserProjectRelation> getProjectResources() {
		return projectResources;
	}

	public void setProjectResources(List<UserProjectRelation> projectResources) {
		this.projectResources = projectResources;
	}

	@Override
	public String toString() {
		return "Project [projectId=" + projectId + ", projectName=" + projectName + ", customerId=" + customerId
				+ ", customerName=" + customerName + ", vertical=" + vertical + ", horizonatl=" + horizonatl
				+ ", subHorizontal=" + subHorizontal + ", managerUser=" + managerUser + ", workinghours=" + workinghours
				+ ", projectResources=" + projectResources + "]";
	}

	

}
