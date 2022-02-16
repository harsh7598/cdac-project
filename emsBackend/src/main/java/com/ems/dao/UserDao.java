package com.ems.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ems.pojos.User;

public interface UserDao extends JpaRepository<User, Integer>{

	User findByEmail(String email);
}
