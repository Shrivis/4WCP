package com.Starapp.Starapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.Starapp.Starapp.Entities.User;
import java.util.List;

public interface UserRepository extends JpaRepository<User , Integer>{
	
	@Query(value = "SELECT u FROM User u WHERE u.userId=:id")
	List<User> findAllUserWithId(@Param("id") int id);

}
