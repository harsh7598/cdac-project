package com.ems.services;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ems.dao.EventDao;
import com.ems.dao.UserDao;
import com.ems.dto.RegisterDTO;
import com.ems.pojos.Event;
import com.ems.pojos.User;

@Service
@Transactional
public class UserServicesIMPL implements IUserServices {

	@Autowired
	private UserDao userDao;
	
	@Autowired
	private  EmailSenderService mailservice;

	@Autowired
	private EventDao eventDao;

	@Autowired
	private PasswordEncoder encoder;

	@Override
	public RegisterDTO registerUser(RegisterDTO request) {
		User user = new User();
		user.setEmail(request.getEmail());
		user.setPassword(encoder.encode(request.getPassword()));// set encoded pwd
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

	@Override
	public List<User> getEmployees(String role) {
		if(role.equals("MANAGER")) {
			return userDao.findByRole("EMPLOYEE");	
		}
		else if(role.equals("MMANAGER")) {
			return userDao.findByRole("EMPLOYEE");	
		}
		else if(role.equals("MADMIN")) {
			return userDao.findByRole("MANAGER");	
		}
		return userDao.findUserByRole();
	}

	@Override
	public void deleteEmployee(int id) {
		userDao.deleteById(id);

	}

	@Override
	public List<User> getEmployeesByEvent(int id) {
		Event e = eventDao.getById(id);
		return userDao.findByRoleAndRegevents("EMPLOYEE", e);
	}

	@Override
	public int validateEmailAndGenearateOtp(String email) {
		int randomNumber;
		if (userDao.findByEmail(email).isPresent()) {
			randomNumber = (int) (Math.random() * 9999);
			if (randomNumber <= 1000) {
				randomNumber = randomNumber + 1000;
			}
			mailservice.sendMail(email,"OTP password Reset",String.valueOf(randomNumber));
			return randomNumber;
		}
		else {
			return -1;
		}
	}

	@Override
	public boolean changePassword(String email, String password) {
		User u=userDao.findByEmail(email).orElseThrow();
		u.setPassword(encoder.encode(password));
		if(userDao.save(u)!=null)
			return true;
		return false;
	}
}
