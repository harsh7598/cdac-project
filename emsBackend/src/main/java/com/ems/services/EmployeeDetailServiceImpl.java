package com.ems.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.ems.dao.EmployeeDao;
import com.ems.pojos.Employee;

@Service
public class EmployeeDetailServiceImpl implements UserDetailsService {

	@Autowired
	private EmployeeDao empDao;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Employee employee=empDao.findByEmail(username);
		if(employee==null) {
			throw new UsernameNotFoundException(username+"not found");
		}
		return new EmployeeDetailImpl(employee);
	}

}
