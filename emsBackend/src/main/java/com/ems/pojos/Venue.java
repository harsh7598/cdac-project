package com.ems.pojos;




import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

import lombok.Getter;
import lombok.Setter;


@Setter
@Getter
@Entity
@Table(name = "venue")
public class Venue extends BaseEntity{
	
	@Column(length = 20)
	@NotEmpty(message = "name required")
	private String name;

	@NotEmpty(message = "location required")
	@Column(length = 20)
	private String location;

	@NotEmpty(message = "address required")
	@Column(length = 20)
	private String address;

	@Column(name = "max_capacity")
	@Positive
	@NotNull(message = "max capacity required")
	private int maxCapacity;
	
	@Column(length = 200)
	private String description;
	
	@Column(length = 20)
	@NotEmpty(message = "category required")
	private String category;
	
	@Column(length = 20)
	@Min(10)
	@Max(10)
	private String contact;
	
	@Positive
	@NotBlank
	private double cost;
	
//	@OneToMany(mappedBy = "bookedVenue",cascade = CascadeType.ALL,fetch = FetchType.EAGER)
//	private List<Event> BookedVenueByEvent= new ArrayList<Event>();
//	
	
}
