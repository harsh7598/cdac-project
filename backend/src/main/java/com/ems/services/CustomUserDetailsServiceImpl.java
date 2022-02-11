package com.ems.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ems.dao.EmployeeDao;
import com.ems.pojos.Employee;

@Service
@Transactional
public class CustomUserDetailsServiceImpl implements UserDetailsService {
	@Autowired
	private EmployeeDao empDao;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// invoke dao's method to get user details
		Employee employee = empDao.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException(username));
		//=> user details found
		return new CustomUserDetails(employee);
	}

}
