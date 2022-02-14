package com.ems.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ems.pojos.Customer;

public interface CustomerDao extends JpaRepository<Customer, Long> {
	Optional<Customer> findByEmail(String email);
}
