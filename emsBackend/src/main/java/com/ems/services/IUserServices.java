package com.ems.services;

import org.springframework.http.ResponseEntity;

import com.ems.dto.LoginRegisterDTO;
import com.ems.pojos.User;

public interface IUserServices {

	public void addUser(User user);

	public ResponseEntity<?> validateUser(LoginRegisterDTO user);
}
