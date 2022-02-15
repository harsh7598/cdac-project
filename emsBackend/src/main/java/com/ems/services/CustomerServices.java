package com.ems.services;

import org.springframework.http.ResponseEntity;

import com.ems.dto.LoginRegisterDTO;
import com.ems.pojos.Customer;
import com.ems.pojos.Role;
import com.ems.pojos.UserRole;

public interface CustomerServices {
public void addCustomer(Customer customer);
public Customer validateCustomer(LoginRegisterDTO customer); 
public Role addRole(Role role);
public String linkUserRole(String email, UserRole role);
}
