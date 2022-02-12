package com.ems.pojos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

import lombok.Data;

@Data
@Entity
@Table(name = "employee")
public class Employee extends BaseEntity {
	@NotBlank(message="First name can't be Blank")
	@Column(length = 20)
	private String name;
	@NotEmpty(message="Date Of Birth can't be Blank")
	private LocalDate dob;
	@NotBlank(message="email address can't be Blank")
	@Column(length = 25,unique = true)
	private String email;
	@NotBlank(message="password can't be Blank")
	@Column(length = 20)
	private String password;
	@NotBlank(message="conatact number can't be Blank")
	@Column(length = 20, name = "contact_number")
	private String contactNumber;
	@NotBlank(message="adhaar number can't be Blank")
	@Column(length = 12, name = "adhar_number")
	private String adharNumber;
	@NotBlank(message="account number can't be Blank")
	@Column(length = 25, name = "account_number")
	private String accountNumber;
	@NotBlank(message="Salary can't be Blank")
	private double salary;
	@NotBlank(message="Position can't be Blank")
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
