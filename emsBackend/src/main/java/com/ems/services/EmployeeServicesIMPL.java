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
public class EmployeeServicesIMPL implements EmployeeServices {
	
	@Autowired
	private EmployeeDao empDao;

	@Autowired
	private RoleDao roleDao;
	
	@Autowired
	private PasswordEncoder encoder;


	@Override
	public Employee validateEmployee(LoginRegisterDTO empDTO) {
		String encodedPassword=encoder.encode(empDTO.getPassword());
		Employee emp=new Employee();
		System.out.println(encodedPassword);
		 emp=empDao.findByEmail(empDTO.getEmail())
				.orElseThrow(()->new RuntimeException("Employee not found"));
		if(empDTO.getEmail().equals(emp.getEmail())
				&&empDTO.getPassword().equals(emp.getPassword())) {
			System.out.println(emp.toString());
			return emp;
		}
		return emp;
	}

	@Override
	public Role addRole(Role role) {
		return roleDao.save(role);
	}

	@Override
	public String linkUserRole(String email, UserRole role) {
		Employee emp=empDao.findByEmail(email).orElseThrow(()->new RuntimeException("User not found"));
		Role userRole=roleDao.findByRole(role).orElseThrow(()->new RuntimeException("Role not found"));
		emp.getRoles().add(userRole);
		return "Linked role to User";
	}
	
		

}
