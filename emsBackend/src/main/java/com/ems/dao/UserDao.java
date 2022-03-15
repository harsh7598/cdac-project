package com.ems.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ems.pojos.Event;
import com.ems.pojos.User;

public interface UserDao extends JpaRepository<User, Integer>{
	Optional<User> findByEmail(String email);
//	@Query("select u.id, u.email,u.name from User u where role=?1")
	List<User> findByRole(String role);
	
//	@Query("SELECT User FROM Event e inner join user_event ue on e.id=ue.event_id inner join User u on u.id=ue.user_id where ue.event_id =?1 and u.role=?2")
	List<User>findByRoleAndRegevents(String role,Event event);
//	
	
//	@Query("insert into user_event values(userId, eventId)")
//	@Query("update user set regevents=event where id=userId")
//	void addEvent(List<Event> event, int userId);
}
