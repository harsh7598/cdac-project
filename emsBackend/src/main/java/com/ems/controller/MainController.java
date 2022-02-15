package com.ems.controller;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ems.dao.RoleDao;
import com.ems.dto.LoginRegisterDTO;
import com.ems.pojos.Customer;
import com.ems.pojos.Employee;
import com.ems.pojos.Role;
import com.ems.pojos.UserRole;
import com.ems.services.CustomerServices;
import com.ems.services.IEmployeeServices;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping
public class MainController {

	@Autowired
	IEmployeeServices employeeService;

	@Autowired
	CustomerServices customerService;

	@Autowired
	RoleDao roleDao;
	
	@Autowired
	BCryptPasswordEncoder passwordEncoder;
	
	@PostMapping("/addrole")
	public void addRole(@RequestBody Role role) {
		roleDao.save(role);
	}

	@PostMapping("/empLogin")
	public ResponseEntity<?> employeeLogin(@RequestBody LoginRegisterDTO employee) {
		return null;
	}
	
	@PostMapping("/empRegistration")
	public String EmployeeRegistration(@RequestBody LoginRegisterDTO data) {
		employeeService.addEmployee(new Employee(data.getName(), LocalDate.parse(data.getDob()), data.getEmail(),
				passwordEncoder.encode(data.getPassword()), data.getContactNumber(), data.getAdhaarNumber(), data.getAccountNumber(),
				data.getSalary(), data.getPoint(), data.getRole()));
		return "Employee Added Successfully";
	}

	@PostMapping("/custregistration")
	public String customerRegistration(@RequestBody LoginRegisterDTO data) {
		Customer customer = new Customer(data.getName(), data.getEmail(), data.getContactNumber(),
				LocalDate.parse(data.getDob()), data.getAdhaarNumber(), data.getPassword());
		System.out.println(customer.toString());
		customerService.addCustomer(customer);
		return "customer added successfully";
	}

	@PostMapping("/customer")
	public ResponseEntity<?> customerLogin(@RequestBody LoginRegisterDTO customer) {
		try {
			System.out.println(customer.getEmail() + " " + customer.getPassword());
			return new ResponseEntity<>(customerService.validateCustomer(customer), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println("err in Customer details " + e);
			return new ResponseEntity<>(e.getMessage(), HttpStatus.UNAUTHORIZED);
		}
	}

	@GetMapping("/customer/welcome")
	public ResponseEntity<?> check() {
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
