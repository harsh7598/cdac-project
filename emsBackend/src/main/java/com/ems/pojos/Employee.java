package com.ems.pojos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "employee")
public class Employee extends BaseEntity {
	
	@Column(length = 20)
	private String name;
	
	private LocalDate dob;
	
	@Column(length = 25,unique = true)
	private String email;

	@Column(length = 100)
	private String password;

	@Column(length = 20, name = "contact_number")
	private String contactNumber;

	@Column(length = 12, name = "adhar_number")
	private String adharNumber;

	@Column(length = 25, name = "account_number")
	private String accountNumber;
	
	private double salary;
	
	@Column(length = 25)
	private String position;
	private int points;	

	@ManyToMany(fetch = FetchType.EAGER) //acceptable solution since max size of many(roles) is 2
	@JoinTable(name="user_roles",joinColumns = @JoinColumn(name="user_id"),
	inverseJoinColumns = @JoinColumn(name="role_id"))
	private Set<Role> roles=new HashSet<>();

	@ManyToMany(cascade = { CascadeType.ALL })
	@JoinTable(name = "employee_event", joinColumns = { @JoinColumn(name = "emp_id") }, inverseJoinColumns = {
			@JoinColumn(name = "event_id") })
	List<Event> asignEvents = new ArrayList<>();
	
	public Employee(String email,String password) {
	this.email=email;
	this.password=password;
	}
}
