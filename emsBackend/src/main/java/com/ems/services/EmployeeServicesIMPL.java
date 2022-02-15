package com.ems.services;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ems.dao.EmployeeDao;
import com.ems.dao.RoleDao;
import com.ems.dto.LoginRegisterDTO;
import com.ems.pojos.Employee;
import com.ems.pojos.Role;
import com.ems.pojos.UserRole;


@Service
@Transactional
public class EmployeeServicesIMPL implements IEmployeeServices {
	
	@Autowired
	private EmployeeDao empDao;

	@Override
	public void addEmployee(Employee employee) {
		empDao.save(employee);
		
	}



}
