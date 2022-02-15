package com.ems.services;

import com.ems.dto.LoginRegisterDTO;
import com.ems.pojos.Employee;
import com.ems.pojos.Role;
import com.ems.pojos.UserRole;

public interface IEmployeeServices {

//	public List<User> findAllUsers() ;
//
//	public Optional<User> findUserById(int id);
//	
//	public User findByUserName(String userName) ;
	public void addEmployee(Employee employee);
}
