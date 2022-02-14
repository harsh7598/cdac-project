package com.ems.services;

import java.util.Collection;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.ems.pojos.Customer;
import com.ems.pojos.Employee;

public class CustomUserDetails implements UserDetails {
	private Employee employee;
	private Customer customer;

	public CustomUserDetails(Employee employee) {
		super();
		this.employee = employee;
	}
	public CustomUserDetails(Customer customer) {
		super();
		this.customer = customer;
	}

//	@Override
//	public Collection<? extends GrantedAuthority> getAuthorities() {
//
//		return employee.getRoles().stream().map(role -> new SimpleGrantedAuthority(role.getRole().name()))
//				.collect(Collectors.toList());
//	}
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		
		return customer.getRoles().stream().map(role -> new SimpleGrantedAuthority(role.getRole().name()))
				.collect(Collectors.toList());
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return employee.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return employee.getEmail();
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}

}
