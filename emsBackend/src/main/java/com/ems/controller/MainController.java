package com.ems.controller;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ems.dto.LoginRegisterDTO;
import com.ems.pojos.Customer;
import com.ems.pojos.Employee;
import com.ems.pojos.Role;
import com.ems.pojos.UserRole;
import com.ems.services.CustomerServices;
import com.ems.services.EmployeeServices;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping
public class MainController {
	
	@Autowired
	EmployeeServices employeeService;
	
	@Autowired
	CustomerServices customerService;
	
	
	@PostMapping("/empLogin")
	public ResponseEntity<?>  employeeLogin(@RequestBody LoginRegisterDTO employee){
		try {
			System.out.println(employee.getEmail()+" "+employee.getPassword());
			Employee e=employeeService.validateEmployee(employee);
			System.out.println(e.getEmail()+" "+e.getName()+" "+e.getPassword());
			return new ResponseEntity<>(e,HttpStatus.OK);
			}catch(RuntimeException e) {
				System.out.println("err in emp details "+e);
				return new ResponseEntity<>(e.getMessage(),HttpStatus.NOT_FOUND);
			}
	}
	
	@PostMapping("/custregistration")
	public String customerRegistration(@RequestBody LoginRegisterDTO data) {
		Customer customer=new Customer(data.getName(),data.getEmail(),
				data.getContactNumber(),LocalDate.parse(data.getDob()),data.getAdhaarNumber(),data.getPassword());
		System.out.println(customer.toString());
		customerService.addCustomer(customer);
		return "customer added successfully";
	}
	
	@PostMapping("/customer")
	public ResponseEntity<?>  customerLogin(@RequestBody LoginRegisterDTO customer){
		try {
			System.out.println(customer.getEmail()+" "+customer.getPassword());
			return new ResponseEntity<>(customerService.validateCustomer(customer),HttpStatus.OK);
			}catch(RuntimeException e) {
				System.out.println("err in Customer details "+e);
				return new ResponseEntity<>(e.getMessage(),HttpStatus.UNAUTHORIZED);
			}
	}
	
}
