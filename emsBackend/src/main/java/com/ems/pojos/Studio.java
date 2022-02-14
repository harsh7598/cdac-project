package com.ems.pojos;

import java.util.ArrayList;
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
@Table(name = "studio")
public class Studio extends BaseEntity {
	@Column(length = 20)
	private String name;
	@Column(length = 10)
	private String Contact;
	private double cost;

	@OneToMany(mappedBy = "studio", cascade = CascadeType.ALL, orphanRemoval = true)
	List<MediaRequirement> bookedMedia = new ArrayList<>();
}
