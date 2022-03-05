package com.ems.services;



import java.util.List;

import com.ems.dto.EventDTO;
import com.ems.pojos.Event;

public interface IEventServices {
	EventDTO registerEvent(EventDTO event,String email);
	Event updateEvent(EventDTO event);
	List<Event> getByUsers(String email);
	Event getById(int id);
}
