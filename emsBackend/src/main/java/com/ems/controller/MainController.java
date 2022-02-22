package com.ems.controller;

import java.time.LocalDate;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ems.custom_exception.EventManagementException;
import com.ems.dao.UserDao;
import com.ems.dto.RegisterDTO;
import com.ems.pojos.User;
import com.ems.services.IUserServices;
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping
public class MainController {
	
	@Autowired
	IUserServices userServices;
	
	@Autowired
	UserDao userdao;
	
	@Autowired
	BCryptPasswordEncoder passwordEncoder;

	@GetMapping("/login")
	public ResponseEntity<?> employeeLogin(Authentication authentication,HttpSession session){
		System.out.println("http session ID "+session.getId());
//		System.out.println(authentication);	
		return new ResponseEntity<User>(userServices.validateUser(authentication.getName()), HttpStatus.OK);
	}

	@GetMapping("/logout")
	public ResponseEntity<String> employeeLogout(HttpSession session){
		session.invalidate();
		return new ResponseEntity<String>("LOGOUT SUCCESS",HttpStatus.OK);
	}

	
	@PostMapping("/empRegistration")
	public ResponseEntity<?> EmployeeRegistration(@RequestBody RegisterDTO data) {
		try {
		User user= new User(data.getName(), LocalDate.parse(data.getDob()), 
				data.getContactNumber(), data.getAdhaarNumber(),
				data.getEmail(),passwordEncoder.encode(data.getPassword()), 
				data.getAccountNumber(), data.getRole(),data.getSalary());
		return new ResponseEntity<> (userServices.addUser(user),HttpStatus.OK);
	}catch (EventManagementException e) {
		return new  ResponseEntity<>(e.getMessage(),HttpStatus.NON_AUTHORITATIVE_INFORMATION);
	}
	}

	@PostMapping("/custregistration")
	public ResponseEntity<?> customerRegistration(@RequestBody RegisterDTO data) {
		try {
		User user = new User(data.getName(), LocalDate.parse(data.getDob()), data.getContactNumber(), data.getAdhaarNumber(), data.getEmail(),
				passwordEncoder.encode(data.getPassword()), 
				data.getAccountNumber(), "CUSTOMER");
		//userServices.addUser(user);
		return new ResponseEntity<> (userServices.addUser(user),HttpStatus.OK);
		}catch (EventManagementException e) {
			return new  ResponseEntity<>(e.getMessage(),HttpStatus.NON_AUTHORITATIVE_INFORMATION);
		}
	}

	
}
