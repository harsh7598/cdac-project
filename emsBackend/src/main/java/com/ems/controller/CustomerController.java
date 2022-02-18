//package com.ems.controller;
//
//import java.time.LocalDate;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.ems.custom_exception.EventManagementException;
//import com.ems.dto.LoginRegisterDTO;
//import com.ems.pojos.User;
//import com.ems.services.IUserServices;
//@CrossOrigin(origins = "http://localhost:3000")
//@RestController
//@RequestMapping
//public class CustomerController {
//
//	@Autowired
//	IUserServices userServices;
//	
//	@Autowired
//	BCryptPasswordEncoder passwordEncoder;
//	
//	@PostMapping("/login")
//	public ResponseEntity<?> employeeLogin(@RequestBody LoginRegisterDTO user){
//		try {
//		return new ResponseEntity<> (userServices.validateUser(user),HttpStatus.OK);
//		}catch (EventManagementException e) {
//			return new  ResponseEntity<>(e.getMessage(),HttpStatus.NON_AUTHORITATIVE_INFORMATION);
//		}
//	}
//	
//	@PostMapping("/empRegistration")
//	public String EmployeeRegistration(@RequestBody LoginRegisterDTO data) {
//		userServices.addUser(new User(data.getName(), LocalDate.parse(data.getDob()), 
//				data.getContactNumber(), data.getAdhaarNumber(),
//				data.getEmail(),passwordEncoder.encode(data.getPassword()), 
//				data.getAccountNumber(), data.getRole(),data.getSalary()));
//		return "Employee Added Successfully";
//	}
//
//	@PostMapping("/custregistration")
//	public String customerRegistration(@RequestBody LoginRegisterDTO data) {
//		User user = new User(data.getName(), LocalDate.parse(data.getDob()), data.getContactNumber(), data.getAdhaarNumber(), data.getEmail(),
//				passwordEncoder.encode(data.getPassword()), 
//				data.getAccountNumber(), data.getRole());
//		userServices.addUser(user);
//		return "customer added successfully";
//	}
//	@GetMapping("/welcome")
//	public String rolecheck(){
//		return "welcome";
//	}
//	
//}
