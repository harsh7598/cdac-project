package com.ems.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Digits;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "studio")
public class Studio extends BaseEntity {
	@Column(length = 20)
	@NotEmpty(message = "cannot be empty")
	private String name;
	@Column(length = 10)
	@Size(min = 10,max = 10)
	private String Contact;
	@Positive
	private double cost;
//
//	@OneToMany(mappedBy = "studio", cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.EAGER)
//	List<Event> bookedByEvent = new ArrayList<>();
}
