package com.ems.pojos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "user")
@Getter
@Setter
@EqualsAndHashCode(callSuper=false)
@AllArgsConstructor
@NoArgsConstructor
public class User extends BaseEntity {
	@Column(length = 20)
	private String name;

	private LocalDate dob;

	@Column(length = 20, name = "contact_number")
	private String contactNumber;

	@Column(length = 12, name = "adhar_number")
	private String adharNumber;
	
	@Column(length = 25,unique = true)
	private String email;

	@Column(length = 100)
	private String password;
	
	@Column(length = 20,name = "acc_number")
	private String accountNumber;
	
	@Column(length = 20)
	private String role;
	private double salary;

	@ManyToMany(cascade = { CascadeType.ALL },fetch = FetchType.EAGER)
	@JoinTable(name = "user_event", joinColumns = { @JoinColumn(name = "user_id") }, inverseJoinColumns = {
			@JoinColumn(name = "event_id") })
	List<Event> regevents = new ArrayList<>();
	
	
	public User(String name, LocalDate dob, String contactNumber, String adharNumber, String email, String password
			,String accountNumber,String role,double salary) {
		super();
		this.name = name;
		this.dob = dob;
		this.contactNumber = contactNumber;
		this.adharNumber = adharNumber;
		this.email = email;
		this.password = password;
		this.role = role;
		this.accountNumber=accountNumber;
		this.salary=salary;
	}
	
	
	public User(String name, LocalDate dob, String contactNumber, String adharNumber, String email, String password
			,String accountNumber,String role) {
		super();
		this.name = name;
		this.dob = dob;
		this.contactNumber = contactNumber;
		this.adharNumber = adharNumber;
		this.email = email;
		this.password = password;
		this.role = role;
	}


	@Override
	public String toString() {
		return "User [name=" + name + ", dob=" + dob + ", contactNumber=" + contactNumber + ", adharNumber="
				+ adharNumber + ", email=" + email + ", password=" + password + ", accountNumber=" + accountNumber
				+ ", role=" + role + ", salary=" + salary + ", regevents=" + regevents + "]";
	}
	
	
}
