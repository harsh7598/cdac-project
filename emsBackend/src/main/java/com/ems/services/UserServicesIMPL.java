package com.ems.services;




import javax.management.RuntimeErrorException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ems.custom_exception.EventManagementException;
import com.ems.dao.UserDao;
import com.ems.dto.LoginRegisterDTO;
import com.ems.pojos.User;

@Service
@Transactional
public class UserServicesIMPL implements IUserServices {
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private BCryptPasswordEncoder encoder;

	@Override
	public void addUser(User user) {
		userDao.save(user);
		
	}

	@Override
	public User validateUser(LoginRegisterDTO user){
	 User u=userDao.findByEmail(user.getEmail()).orElseThrow(()-> new EventManagementException("USER NOT FOUND"));
	 if(encoder.matches(user.getPassword(), u.getPassword()))
		return u;
	 throw new EventManagementException("INVALID PASSWORD");
	}
}
