package com.ems.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ems.pojos.Event;
import com.ems.pojos.User;

public interface UserDao extends JpaRepository<User, Integer>{
	Optional<User> findByEmail(String email);
	
//	@Query("insert into user_event values(userId, eventId)")
//	@Query("update user set regevents=event where id=userId")
//	void addEvent(List<Event> event, int userId);
}
