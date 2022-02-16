package com.ems.services;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
	public ResponseEntity<?> validateUser(LoginRegisterDTO user) {
		try {
			userDao.findByEmail(user.getEmail());
//			if(encoder.matches(user.getPassword(), u.getPassword())) 
//					return new ResponseEntity<>(u ,HttpStatus.OK);
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
			}catch(RuntimeException e){
				return new ResponseEntity<>(e.getMessage(),HttpStatus.UNAUTHORIZED);
			}
	}

}
