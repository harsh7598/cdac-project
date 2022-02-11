package com.ems.services;

import com.ems.pojos.Employee;
import com.ems.pojos.Role;
import com.ems.pojos.UserRole;

public interface EmployeeServices {
//	Employee authenticate(String email,String password);
//	Employee findByEmail(String Email);
	
	Employee saveUser(Employee employee);
	Role addRole(Role role);
	String linkEmployeeRole(String email,UserRole roleName);
	Employee findByEmail(String email);
}
