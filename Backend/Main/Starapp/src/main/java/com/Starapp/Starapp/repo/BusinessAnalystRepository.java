package com.Starapp.Starapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Starapp.Starapp.Entities.BusinessAnalyst;

@Repository
public interface BusinessAnalystRepository extends JpaRepository<BusinessAnalyst , Integer> {

}
