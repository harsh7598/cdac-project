package com.ems.services;

import com.ems.dto.LoginRegisterDTO;
import com.ems.pojos.Employee;
import com.ems.pojos.Role;
import com.ems.pojos.UserRole;

public interface EmployeeServices {
	public Role addRole(Role role);
	public String linkUserRole(String email,UserRole role);
	public Employee validateEmployee(LoginRegisterDTO empDTO);
	
}
