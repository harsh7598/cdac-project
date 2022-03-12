package com.ems.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ems.dto.EventDTO;
import com.ems.jwt_utils.JwtUtils;
import com.ems.pojos.Event;
import com.ems.pojos.User;
import com.ems.services.IEventServices;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping
public class EventController {
	
	@Autowired
	IEventServices eventServices;
	
	JwtUtils jwt;
	
	@PostMapping("/bookevent")
	public ResponseEntity<?> bookEvent(@RequestBody EventDTO event,HttpServletRequest request) {
		//String token=request.getHeader("Authorization");
//		System.out.println(token);
//		System.out.println(request.getUserPrincipal().getName());
//	s	return null;
	return ResponseEntity.ok(eventServices.registerEvent(event,request.getUserPrincipal().getName()));
	}
	
	@GetMapping("/updateevent/{id}")
	public Event getEventById(@PathVariable int id){
		System.out.println(id);
		System.out.println(eventServices.getById(id));
		return eventServices.getById(id);
	}
	@PutMapping("/assignemployee/{id}")
	public void assignEmployee(@PathVariable int id,@RequestBody User user){
		 eventServices.assignEmployee(id, user);
	}
	@PutMapping("/unassignemployee/{id}")
	public void unassignEmployee(@PathVariable int id,@RequestBody User user){
		eventServices.unassignEmployee(id, user);
	}
	
	@PostMapping("/eventinfo")
	public ResponseEntity<?> registerEvent(@RequestBody EventDTO eventdata,HttpServletRequest request){
		System.out.println(eventdata.toString());
		//System.out.println(media);
//		menuList.forEach((e)->System.out.println(e));
		return ResponseEntity.ok(eventServices.registerEvent(eventdata,request.getUserPrincipal().getName()));
	}
	@PutMapping("/eventinfo")
	public ResponseEntity<?> updateEvent(@RequestBody EventDTO eventdata,HttpServletRequest request){
		System.out.println(eventdata.toString());
		//System.out.println(media);
//		menuList.forEach((e)->System.out.println(e));
		return ResponseEntity.ok(eventServices.updateEvent(eventdata));
	}
	
	@GetMapping("/regevents")
	public ResponseEntity<?> getEvents(HttpServletRequest request){
		System.out.println(request.getUserPrincipal().getName());
		return ResponseEntity.ok(eventServices.getByUsers(request.getUserPrincipal().getName()));
	}
	
}
