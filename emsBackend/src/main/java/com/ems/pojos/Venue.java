package com.ems.pojos;




import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;


@Setter
@Getter
@Entity
@Table(name = "venue")
public class Venue extends BaseEntity{
	
	@Column(length = 20)
	private String name;

	@Column(length = 20)
	private String location;

	@Column(length = 20)
	private String address;

	@Column(name = "max_capacity")
	private int maxCapacity;
	@Column(length = 200)
	private String description;
	
	@Column(length = 20)
	private String category;
	
	@Column(length = 20)
	private String contact;
	
	private double cost;
	
	@OneToMany(mappedBy = "bookedVenue",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Event> BookedVenueByEvent;
	
	
}
