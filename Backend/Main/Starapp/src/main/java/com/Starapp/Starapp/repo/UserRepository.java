package com.Starapp.Starapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Starapp.Starapp.Entities.User;

public interface UserRepository extends JpaRepository<User , Integer>{

}
