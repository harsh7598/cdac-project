package com.ems.services;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ems.dao.CustomerDao;
import com.ems.dto.LoginRegisterDTO;
import com.ems.pojos.Customer;

@Service
@Transactional
public class CustomerServiceIMPL implements CustomerServices{

	@Autowired
	CustomerDao customerDao;
	@Autowired
	PasswordEncoder encoder;
	@Override
	public void addCustomer(Customer customer) {
		customer.setPassword(encoder.encode(customer.getPassword()));
		customerDao.save(customer);
	}
	
	@Override
	public Customer validateCustomer(LoginRegisterDTO customer){
		System.out.println(customer.getEmail()+" "+customer.getPassword());
		Customer c=new Customer(); 
		c= customerDao.findByEmail(customer.getEmail()).orElseThrow(()-> new RuntimeException("customer not found"));
	if(!encoder.matches(customer.getPassword(),c.getPassword()))
		throw new RuntimeException("password invalid");
	return c;
	}

}
