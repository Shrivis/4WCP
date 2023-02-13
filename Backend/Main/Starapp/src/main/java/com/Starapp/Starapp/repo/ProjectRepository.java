package com.Starapp.Starapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Starapp.Starapp.Entities.Project;

public interface ProjectRepository extends JpaRepository<Project , Integer> {

}
