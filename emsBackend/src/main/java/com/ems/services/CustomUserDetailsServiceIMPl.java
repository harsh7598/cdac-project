package com.ems.services;

import javax.transaction.Transactional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ems.dao.EmployeeDao;
import com.ems.pojos.Employee;

@Service
@Transactional
public class CustomUserDetailsServiceIMPl implements UserDetailsService {

	private EmployeeDao empDao;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		Employee emp=empDao.findByEmail(email).orElseThrow(()->new UsernameNotFoundException(email));
		return new CustomUserDetails(emp);
	}

}
