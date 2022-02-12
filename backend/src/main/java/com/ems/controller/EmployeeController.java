package com.ems.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ems.dao.EmployeeDao;
import com.ems.pojos.Employee;
import com.ems.services.EmployeeServices;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/employee")
public class EmployeeController {
	
	public EmployeeController() {
	System.out.println("in ctr");	
	}
	
	@Autowired
	private EmployeeServices empSer;
	
	@GetMapping
	public void login() {
		System.out.println("helloo");
	}
	
	@PostMapping
	public void login(@RequestParam String email,@RequestParam String password) {
		System.out.println("in post employee "+email+" "+password);
	}
}
