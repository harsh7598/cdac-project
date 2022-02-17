package com.ems.services;

import org.springframework.http.ResponseEntity;

import com.ems.custom_exception.EventManagementException;
import com.ems.dto.LoginRegisterDTO;
import com.ems.pojos.User;

public interface IUserServices {

	public void addUser(User user);

	public User validateUser(LoginRegisterDTO user);
}
