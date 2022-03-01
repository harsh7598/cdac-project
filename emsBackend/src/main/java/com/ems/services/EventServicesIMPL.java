package com.ems.services;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ems.dao.CatererDao;
import com.ems.dao.EventDao;
import com.ems.dao.MenuDao;
import com.ems.dao.UserDao;
import com.ems.dao.VenueDao;
import com.ems.dto.EventDTO;
import com.ems.pojos.Caters;
import com.ems.pojos.Event;
import com.ems.pojos.Menu;
import com.ems.pojos.User;
import com.ems.pojos.Venue;
import java.util.*;

@Service
@Transactional
public class EventServicesIMPL implements IEventServices {
	
	@Autowired
	MenuDao menuDao;
	@Autowired
	EventDao eventDao;
	@Autowired
	UserDao userDao;
	@Autowired
	VenueDao venueDao;
	@Autowired
	CatererDao catererDao;
	
	@Override
	public EventDTO registerEvent(EventDTO event, String email) {
		Event e = new Event(event.getName(), event.getType(), event.getDate(), event.getGuestCount(),event.isPhotography(), event.isVideography(),
				event.isAlbum(),event.isDrone(), event.isCrane(),event.getBookedVenue());
		User u = userDao.findByEmail(email).orElseThrow();
		u.getRegevents().add(e);
		//e.getUsers().add(u);	
		List<Menu> menus=new ArrayList<Menu>();
		event.getMenus().forEach((p)->menus.add(menuDao.findById(p.getId()).orElseThrow()));
		e.getMenus().addAll(menus);
		//eventDao.
		return event;
	}

	@Override
	public List<Event> getByUsers(String email) {
		System.out.println(email);
		User u = userDao.findByEmail(email).orElseThrow();
		//System.out.println(u.getRegevents().toString());
		return u.getRegevents();
	}
	
	

}
