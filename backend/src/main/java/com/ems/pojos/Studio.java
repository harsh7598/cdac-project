package com.ems.pojos;

import java.util.ArrayList;
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
@Table(name = "studio")
public class Studio extends BaseEntity {
	@NotBlank(message = "name cannot be blank")
	@Column(length = 20)
	private String name;
	@NotBlank(message = "contact cannot be blank")
	@Column(length = 10)
	private String Contact;
	@NotBlank(message = "cost cannot be blank")
	private double cost;

	@OneToMany(mappedBy = "studio", cascade = CascadeType.ALL, orphanRemoval = true)
	List<MediaRequirement> bookedMedia = new ArrayList<>();
}
