package com.Starapp.Starapp.repo;

import java.util.List;

import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.Starapp.Starapp.Entities.UserProjectRelation;

public interface UserProjectRelationRepository extends JpaRepository<UserProjectRelation , Integer>{

	@Query(value = "SELECT ur.projectResource FROM UserProjectRelation ur WHERE ur.resourceProject.id=:id")
	List<Object> getAllUserUnderProject(@Param("id") int projectId);

}
