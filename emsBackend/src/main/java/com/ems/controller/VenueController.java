package com.ems.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ems.pojos.Venue;
import com.ems.services.IVenueServices;

@RestController
@CrossOrigin(origins = "http://localHost:3000")
@RequestMapping
public class VenueController {
	
	@Autowired
	private IVenueServices venueServices;
	
	@GetMapping("/venue")
	public List<Venue> getVenues(){
		return venueServices.getAllVenues(); 
	}
}
