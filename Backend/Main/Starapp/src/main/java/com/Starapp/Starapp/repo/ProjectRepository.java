package com.Starapp.Starapp.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.Starapp.Starapp.Entities.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, String> {
	
	@Query("select p from Project p where p.managerUser.userId=:id")
	List<Project> allProjectWhereManagerIs(@Param("id") Long id);
	
	
	
	@Query("select distinct e.horizontal FROM Project e")
	List<String> getAllUniqueHorizontals();
    
	
}
