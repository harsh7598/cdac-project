package com.ems.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

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
	@Size(min = 10,max = 10)
	private String contactNumber;
	@Column(length = 30)
	private String speciality;
		
//	@OneToMany(mappedBy = "bookedCater",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.EAGER)
//	private List<Event> BookedEvents;
	
}
