package com.Starapp.Starapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Starapp.Starapp.Entities.Request;

public interface RequestRepository  extends JpaRepository<Request , Integer>  {

}
