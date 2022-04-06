package com.ems.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ems.dao.CatererDao;
import com.ems.dao.EventDao;
import com.ems.dao.MenuDao;
import com.ems.dao.UserDao;
import com.ems.dao.VenueDao;
import com.ems.dto.EventDTO;
import com.ems.pojos.Event;
import com.ems.pojos.Menu;
import com.ems.pojos.Studio;
import com.ems.pojos.User;

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
		Event e = new Event(event.getName(), event.getType(), event.getDate(), event.getGuestCount(),
				event.isPhotography(), event.isVideography(), event.isAlbum(), event.isDrone(), event.isCrane(),
				event.getBookedVenue());
		e.setStatus("Waiting For Approval");
		User u = userDao.findByEmail(email).orElseThrow();
		u.getRegevents().add(e);
		List<Menu> menus = new ArrayList<Menu>();
		event.getMenus().forEach((p) -> menus.add(menuDao.findById(p.getId()).orElseThrow()));
		e.getMenus().addAll(menus);
		return event;
	}

	@Override
	public Event updateEvent(EventDTO event) {

		Event e = new Event(event.getName(), event.getType(), event.getDate(), event.getGuestCount(),
				event.isPhotography(), event.isVideography(), event.isAlbum(), event.isDrone(), event.isCrane(),
				event.getBookedVenue());
		e.setStudio(event.getStudio());
		e.setId(event.getId());
		e.setStatus(event.getStatus());
		System.out.println("fsjhgjhb");
		List<Menu> menus = new ArrayList<Menu>();
		System.out.println(e);
		event.getMenus().forEach((p) -> menus.add(menuDao.findById(p.getId()).orElseThrow()));
		e.getMenus().addAll(menus);
		if (event.getStatus().equals("Waiting For Payment")) {
			double totalCost = 0;
			totalCost = e.getBookedVenue().getCost() ;
			Studio s = e.getStudio();
			if(e.isPhotography())
				totalCost+=s.getPhotographycost();
			if(e.isVideography())
				totalCost+=s.getVideographycost();
			if(e.isAlbum())
				totalCost+=s.getAlbumcost();
			if(e.isDrone())
				totalCost+=s.getDronecost();
			if(e.isCrane())
				totalCost+=s.getCranecost();
			List< Menu> m=e.getMenus();
			for(Menu ms : m )
			{
				totalCost+=(e.getGuestCount()* ms.getPrice());
			}
			e.setTotalCost(totalCost);
			System.out.println("TotalCost-"+e.getTotalCost());
		}
		eventDao.save(e);
		return e;
	}

	@Override
	public List<Event> getByUsers(String email) {
		System.out.println(email);
		User u = userDao.findByEmail(email).orElseThrow();
		if (u.getRole().equals("ADMIN")) {
			return eventDao.findAll();
		} else
			return u.getRegevents();
	}

	@Override
	public Event getById(int id) {
		System.out.println(eventDao.getById(id));
		return eventDao.getById(id);
	}

	@Override
	public void assignEmployee(int id, User user) {
		user.getRegevents().add(getById(id));
		userDao.save(user);
		System.out.println("in assign");
	}

	@Override
	public void unassignEmployee(int id, User user) {
		user.getRegevents().remove(getById(id));
		userDao.save(user);
	}

}
