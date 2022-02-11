package com.ems.pojos;

import java.time.LocalDate;
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
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

import lombok.Data;

@Data
@Entity
@Table(name = "customer")
public class Customer extends BaseEntity {
	@NotBlank(message="First name can't be Blank")
	@Column(length = 20)
	private String name;
	@NotEmpty(message="Date of birth can't be Blank")
	private LocalDate dob;
	@NotBlank(message="conatact number can't be Blank")
	@Column(length = 20, name = "conatct_number")
	private String contactNumber;
	@NotBlank(message="adhaar number can't be Blank")
	@Column(length = 12, name = "adhar_number")
	private String adharNumber;
	@NotBlank(message="email address can't be Blank")
	@Column(length = 25,unique = true)
	private String email;
	@NotBlank(message="password can't be Blank")
	@Column(length = 25)
	private String password;
	@Column(name = "priority_status")
	private int priorityStatus;

	@ManyToMany(fetch = FetchType.EAGER) //acceptable solution since max size of many(roles) is 2
	@JoinTable(name="user_roles",joinColumns = @JoinColumn(name="user_id"),
	inverseJoinColumns = @JoinColumn(name="role_id"))
	private Set<Role> roles=new HashSet<>();

	@OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Event> BookedEvent;
	

}
