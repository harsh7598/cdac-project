package com.ems.controller;

import javax.servlet.http.HttpServletRequest;

import org.hibernate.internal.build.AllowSysOut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ems.dto.EventDTO;
import com.ems.jwt_utils.JwtUtils;
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
		String token=request.getHeader("authorization");
		System.out.println(token);
//		System.out.println(request.getUserPrincipal().getName());
//	s	return null;
	return ResponseEntity.ok(eventServices.registerEvent(event,request.getUserPrincipal().getName()));
	}
}
