package com.ems.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ems.pojos.Employee;

public interface EmployeeDao extends JpaRepository<Employee, Integer>{
 Optional<Employee> findByEmail(String email);
 
}
