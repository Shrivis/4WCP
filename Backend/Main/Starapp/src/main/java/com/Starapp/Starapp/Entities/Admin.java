package com.Starapp.Starapp.Entities;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.UpdateTimestamp;

import lombok.Data;

@Entity
@Data
public class Admin {
		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		private Long adminId;
		private String name;
		private String email;
		private String password;
		@UpdateTimestamp
		private LocalDateTime lastActive;
}


