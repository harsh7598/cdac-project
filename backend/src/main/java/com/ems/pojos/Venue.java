package com.ems.pojos;




import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import lombok.Data;


@Data
@Entity
@Table(name = "venue")
public class Venue extends BaseEntity{
	@NotBlank(message = "name cannot be blank")
	@Column(length = 20)
	private String name;
	@NotBlank(message = "location cannot be blank")
	@Column(length = 20)
	private String location;
	@NotBlank(message = "address cannot be blank")
	@Column(length = 20)
	private String address;
	@NotBlank(message = "max capacity cannot be blank")
	@Column(name = "max_capacity")
	private int maxCapacity;
	@Column(length = 200)
	private String description;
	@NotBlank(message = "Category cannot be blank")
	@Column(length = 20)
	private String category;
	@NotBlank(message = "contact cannot be blank")
	@Column(length = 20)
	private String contact;
	@NotBlank(message = "cost cannot be blank")
	private double cost;
	
	@OneToMany(mappedBy = "bookedVenue",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Event> BookedVenueByEvent;
	
	
}
