package com.Starapp.Starapp.Entities;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class BusinessAnalyst {
		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		private Long analystId;
		private String name;
		private String email;
		private String password;
		private LocalDateTime lastActive;
}


