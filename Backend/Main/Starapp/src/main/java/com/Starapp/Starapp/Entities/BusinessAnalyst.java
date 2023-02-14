package com.Starapp.Starapp.Entities;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class BusinessAnalyst {
		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		int baId;
		String name;
		String email;
		String password;
		LocalDateTime lastActive;
		public int getBaId() {
			return baId;
		}
		public void setBaId(int baId) {
			this.baId = baId;
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
		public LocalDateTime getLastActive() {
			return lastActive;
		}
		public void setLastActive(LocalDateTime lastActive) {
			this.lastActive = lastActive;
		}
		public BusinessAnalyst(int baId, String name, String email, String password, LocalDateTime lastActive) {
			super();
			this.baId = baId;
			this.name = name;
			this.email = email;
			this.password = password;
			this.lastActive = lastActive;
		}
		@Override
		public String toString() {
			return "BusinessAnalyst [baId=" + baId + ", name=" + name + ", email=" + email + ", password=" + password
					+ ", lastActive=" + lastActive + "]";
		}
		
		
		
		
}


