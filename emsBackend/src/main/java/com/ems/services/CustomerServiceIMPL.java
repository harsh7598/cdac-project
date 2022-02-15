package com.ems.services;


import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ems.dao.CustomerDao;
import com.ems.dao.RoleDao;
import com.ems.dto.LoginRegisterDTO;
import com.ems.pojos.Customer;
import com.ems.pojos.Employee;
import com.ems.pojos.Role;
import com.ems.pojos.UserRole;

@Service
@Transactional
public class CustomerServiceIMPL implements CustomerServices{

	@Autowired
	CustomerDao customerDao;
	@Autowired
	PasswordEncoder encoder;
	
	@Autowired
	RoleDao roleDao;
	@Override
	public void addCustomer(Customer customer) {
		customer.setPassword(encoder.encode(customer.getPassword()));
		Set<Role> role =new HashSet<Role>();
		role.add(new Role(UserRole.ROLE_CUSTOMER));				
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
	
	@Override
	public Role addRole(Role role) {
		return roleDao.save(role);
	}

	@Override
	public String linkUserRole(String email, UserRole role) {
		Customer customer=customerDao.findByEmail(email).orElseThrow(()->new RuntimeException("User not found"));
		Role userRole=roleDao.findByRole(role).orElseThrow(()->new RuntimeException("Role not found"));
		return "Linked role to User";
	}

}
