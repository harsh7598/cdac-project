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
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

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
	@NotEmpty(message = "name cannot be empty")
	private String name;
	@Past
	@NotNull(message = "date of birth must be required")
	private LocalDate dob;
	
	
	@Column(length = 20, name = "contact_number")
	@Size(min = 10,max = 10)
	private String contactNumber;

	@Column(length = 12, name = "adhar_number")
	@Size(min = 12,max = 12)
	private String adharNumber;
	
	@Column(length = 25,unique = true)
	@Email
	@NotEmpty(message = "email cannot be null")
	private String email;

	@Column(length = 100)
	@NotEmpty(message = "password required")
	private String password;
	
	//@NotEmpty(message = "Account number required")
	@Min(6)
	@Max(18)
	@Column(length = 20,name = "acc_number")
	private String accountNumber;
	
	@Column(length = 20)
	@NotEmpty
	private String role;
	private double salary;

	@ManyToMany(cascade = { CascadeType.ALL },fetch = FetchType.EAGER)
	@JoinTable(name = "user_event", joinColumns = { @JoinColumn(name = "user_id") }, inverseJoinColumns = {
			@JoinColumn(name = "event_id") })
	List<Event> regevents = new ArrayList<>();
	

	@OneToMany()
	@JoinColumn(name="user_id")
	@LazyCollection(LazyCollectionOption.FALSE)
	List<UserTodo> todoList=new ArrayList<UserTodo>();
	
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
