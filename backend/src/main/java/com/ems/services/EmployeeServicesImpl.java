package com.ems.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ems.dao.EmployeeDao;
import com.ems.dao.RoleDao;
import com.ems.pojos.Employee;
import com.ems.pojos.Role;
import com.ems.pojos.UserRole;


@Service
@Transactional 
public class EmployeeServicesImpl implements EmployeeServices {
	@Autowired
	private EmployeeDao empDao;

	@Autowired
	private RoleDao roleDao;

	@Autowired
	private PasswordEncoder encoder;
	@Override
	public Employee saveUser(Employee employee) {
		System.out.println("save employee " + employee);
		employee.setPassword(encoder.encode(employee.getPassword()));
		return empDao.save(employee);
	}

	@Override
	public Role addRole(Role role) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String linkEmployeeRole(String email, UserRole roleName) {
		// get user from user name
				Employee employee = empDao.findByEmail(email)
						.orElseThrow(() -> new RuntimeException("User not found!!!!"));
				// get role from role name
				Role userRole=roleDao.findByRole(roleName).orElseThrow(() -> new RuntimeException("Role not found!!!!"));
				//user n role : found
				// add role to user
				employee.getRoles().add(userRole);
				return "Linked role to User....";
	}
	
	@Override
	public Employee findByEmail(String email) {
		Employee employee = empDao.findByEmail(email)
				.orElseThrow(() -> new RuntimeException("User not found!!!!"));
		// get role from role name

		//user n role : found
		// add role to user
		return employee;
	}
}
