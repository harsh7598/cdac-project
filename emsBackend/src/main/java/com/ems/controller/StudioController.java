package com.ems.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ems.pojos.Studio;
import com.ems.services.IStudioServices;

@RequestMapping
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class StudioController {

	@Autowired
	private IStudioServices studioServices;
	
	@GetMapping("/studio")
	public List<Studio> getAllList(){
		return studioServices.getAllStudio();
	}
}
