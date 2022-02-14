package com.ems.pojos;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "caters")
public class Caters extends BaseEntity {
	
	@Column(length = 20)
	private String name;

	@Column(length = 20, name = "contact_number")
	private String contactNumber;
	@Column(length = 20)
	private String speciality;
		
	@OneToMany(mappedBy = "bookedCater",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Event> BookedEvents;
	
}
