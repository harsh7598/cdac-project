package com.ems.services;



import com.ems.dto.EventDTO;

public interface IEventServices {
	EventDTO registerEvent(EventDTO event,String email);
}
