package com.ems.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ems.pojos.User;

public interface UserDao extends JpaRepository<User, Integer>{
	Optional<User> findByEmail(String email);
	
	User save(User user);
	
}
