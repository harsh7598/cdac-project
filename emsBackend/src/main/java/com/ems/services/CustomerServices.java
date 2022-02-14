package com.ems.services;

import org.springframework.http.ResponseEntity;

import com.ems.dto.LoginRegisterDTO;
import com.ems.pojos.Customer;

public interface CustomerServices {
public void addCustomer(Customer customer);
public Customer validateCustomer(LoginRegisterDTO customer); 
}
