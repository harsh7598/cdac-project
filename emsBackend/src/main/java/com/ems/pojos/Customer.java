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
import javax.persistence.OneToMany;
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
@Table(name = "customer")
public class Customer extends BaseEntity {


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
	@Column(name = "priority_status")
	private int priorityStatus;
	
	@ManyToMany(fetch = FetchType.EAGER) //acceptable solution since max size of many(roles) is 2
	@JoinTable(name="user_roles",joinColumns = @JoinColumn(name="user_id"),
	inverseJoinColumns = @JoinColumn(name="role_id"))
	private Set<Role> roles=new HashSet<>();

	@OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.EAGER)
	private List<Event> BookedEvent=new ArrayList<Event>();

	public Customer(String name, String email, String contactNumber, LocalDate dob,String adharNumber,  String password) {
		super();
		this.name = name;
		this.dob = dob;
		this.contactNumber = contactNumber;
		this.adharNumber = adharNumber;
		this.email = email;
		this.password = password;
	}
	
	

}
