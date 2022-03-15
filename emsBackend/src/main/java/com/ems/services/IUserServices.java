package com.ems.services;

import java.util.List;

import com.ems.dto.RegisterDTO;
import com.ems.pojos.Event;
import com.ems.pojos.User;

public interface IUserServices {
	public RegisterDTO registerUser(RegisterDTO request);
	public String accessUsername(String email);
	public List<User> getEmployees();
	public void deleteEmployee(int id);
	public List<User> getEmployeesByEvent(int id);
	
}
