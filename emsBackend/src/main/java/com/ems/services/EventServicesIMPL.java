package com.ems.services;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ems.dao.EventDao;
import com.ems.dao.UserDao;
import com.ems.dto.EventDTO;
import com.ems.pojos.Event;
import com.ems.pojos.EventType;
import com.ems.pojos.User;

@Service
@Transactional
public class EventServicesIMPL implements IEventServices {
	@Autowired
	EventDao eventDao;
	@Autowired
	UserDao userDao;
	
	@Override
	public EventDTO registerEvent(EventDTO event,String email) {
		Event e=new Event(event.getEventName(),EventType.valueOf(event.getEventType()),event.getDate(),
				event.getStartTime(),event.getEndTime(),event.getGuestCount());
		User u= userDao.findByEmail(email).orElseThrow();
		System.out.println(u.toString());
//		Event persistanceEvent=eventDao.save(e);
//		BeanUtils.copyProperties(persistanceEvent, event);
		return event;
	}

//	@Override
//	public ResponseEntity<?>RegisterEvent(EventDTO event) {
//		Event e=new Event(event.getEventName(),EventType.valueOf(event.getEventType()),event.getDate(),
//				event.getStartTime(),event.getEndTime(),event.getGuestCount());
//		Event persistanceEvent=eventDao.save(e);
//		return ResponseEntity<?>(HttpStatus.ok);
//	}

}
