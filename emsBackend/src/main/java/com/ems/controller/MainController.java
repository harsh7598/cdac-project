package com.ems.controller;

import java.security.Principal;
import java.time.LocalDate;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ems.custom_exception.EventManagementException;
import com.ems.dao.UserDao;
import com.ems.dto.LoginRegisterDTO;
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
	public User employeeLogin(Authentication authentication){
		System.out.println(authentication.getDetails());
		return userdao.findByEmail(authentication.getName()).orElseThrow(()-> new EventManagementException("INvalid Data"));
//		System.out.println(user.getEmail()+" "+user.getPassword());
//		System.out.println(user);
//		return "login";
	}
	
//	@GetMapping("/login")
//	public String employeeLogin(Principal username){
//		System.out.println(username.getName());
////		System.out.println(user.getEmail()+" "+user.getPassword());
////		System.out.println(user);
//		return "login";
//	}
	@GetMapping("/logout")
	public String employeeLogout(){
		return "logout page";
	}
//	
//	@PostMapping("/login")
//	public ResponseEntity<?> employeeLogin(@RequestBody LoginRegisterDTO user){
//		try {
//		return new ResponseEntity<> (userServices.validateUser(user),HttpStatus.OK);
//		}catch (EventManagementException e) {
//			return new  ResponseEntity<>(e.getMessage(),HttpStatus.NON_AUTHORITATIVE_INFORMATION);
//		}
//	}
	
	@PostMapping("/empRegistration")
	public ResponseEntity<?> EmployeeRegistration(@RequestBody LoginRegisterDTO data) {
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
	public ResponseEntity<?> customerRegistration(@RequestBody LoginRegisterDTO data) {
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
