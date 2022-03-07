package com.ems.services;

import java.time.LocalDate;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ems.dao.UserDao;
import com.ems.dto.RegisterDTO;
import com.ems.pojos.User;

@Service
@Transactional
public class UserServicesIMPL implements IUserServices {

	@Autowired
	private UserDao userDao;
	
	@Autowired
	private PasswordEncoder encoder;

	@Override
	public RegisterDTO registerUser(RegisterDTO request) {
		User user = new User();
		user.setEmail(request.getEmail());
		user.setPassword(encoder.encode(request.getPassword()));//set encoded pwd
		user.setDob((request.getDob()));
		user.setAccountNumber(request.getAccountNumber());
		user.setAdharNumber(request.getAdharNumber());
		user.setContactNumber(request.getContactNumber());
		user.setName(request.getName());
		user.setRole(request.getRole());
		user.setSalary(request.getSalary());
		User persistentUser = userDao.save(user);
		RegisterDTO dto = new RegisterDTO();
		System.out.println(persistentUser.toString());
		BeanUtils.copyProperties(persistentUser, dto);
		return dto;
	}
	
	@Override
	public String accessUsername(String email) {
		User u = userDao.findByEmail(email).orElseThrow();
		return u.getName();
	}
}
