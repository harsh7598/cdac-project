package com.ems.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ems.custom_exception.EventManagementException;
import com.ems.dao.UserDao;
import com.ems.pojos.User;

@Service
@Transactional
public class UserServicesIMPL implements IUserServices {

	@Autowired
	private UserDao userDao;

//	@Override
//	public User addUser(User user) {
//		return userDao.save(user);
//	}

	@Override
	public User validateUser(String email) {
		User u = userDao.findByEmail(email).orElseThrow(() -> new EventManagementException("USER NOT FOUND"));
//		if (encoder.matches(credentials.getPassword(), u.getPassword()))
			return u;
//		throw new EventManagementException("INVALID PASSWORD");
	}

	@Override
	public User addUser(User user) {
		return userDao.save(user);
	}
}
