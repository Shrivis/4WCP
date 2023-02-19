package com.Starapp.Starapp.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.Starapp.Starapp.Entities.WorkingHours;

public interface WorkingHoursRepository extends JpaRepository<WorkingHours , Integer> {
	@Query("select w from WorkingHours w where w.project.managerUser.userId=:id")
	List<WorkingHours> WorkingHoursOfResourcesForManagerId(@Param("id") Long id);

	@Query("select w from WorkingHours w where w.user.userId=:id")
	List<WorkingHours> GetAllWorkingHoursOfResouseById(@Param("id") Long id);

	@Query(value="select count(w) from WorkingHours w where w.user.userId=:id and w.isActive=0 and w.isApproved=1")
	Integer getResourceApprovedStatus(Long id);
	
	@Query(value="select count(w) from WorkingHours w where w.user.userId=:id and w.isActive=0 and w.isApproved=0")
	Integer getResourceRejectedStatus(Long id);
	
	@Query(value="select count(w) from WorkingHours w where w.project.managerUser.userId=:id and w.isActive=0 and w.isApproved=1")
	Integer getResourceApprovedStatusForManager(Long id);

	@Query(value="select count(w) from WorkingHours w where w.project.managerUser.userId=:id and w.isActive=0 and w.isApproved=0")
	Integer getResourceRejectedStatusForManager(Long id);
}
