package com.Starapp.Starapp.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.Starapp.Starapp.Entities.WorkingHours;

public interface WorkingHoursRepository extends JpaRepository<WorkingHours , Integer> {
	@Query("select w from WorkingHours w where w.project.managerUser.userId=:id")
	List<WorkingHours> WorkingHoursOfResourcesForManagerId(@Param("id") int id);

	@Query("select w from WorkingHours w where w.user.userId=:id")
	List<WorkingHours> GetAllWorkingHoursOfResouseById(@Param("id") int id);

}
