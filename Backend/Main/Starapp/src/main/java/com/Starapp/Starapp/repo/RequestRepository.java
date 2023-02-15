package com.Starapp.Starapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.Starapp.Starapp.Entities.Request;
import com.Starapp.Starapp.Entities.User;

public interface RequestRepository  extends JpaRepository<Request , Integer>  {
	
	@Query(value = "SELECT COUNT(ur.isApproved) FROM Request ur WHERE ur.manager.userId=:id and isApproved=true")
	int countTotalApprovedRequests(@Param("id") int id);
	

	@Query(value = "SELECT COUNT(ur.isApproved) FROM Request ur WHERE ur.manager.userId=:id and isApproved=false")
	int countTotalRejectedRequests(@Param("id") int id);
	
	@Query(value = "SELECT ur FROM Request ur WHERE ur.manager.userId=:id")
	Request FindById(@Param("id") int id);

}




