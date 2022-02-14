package com.ems.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "menu")
public class Menu extends BaseEntity {
	@Enumerated(value = EnumType.STRING)
	private CategoryType category;
	@Enumerated(value = EnumType.STRING)
	@Column(name = "sub_category")
	private SubCategoryType subCategory;
	@Column(name = "menu_name ", length = 20)
	private String MenuName;
	private double price;

	@ManyToMany(cascade = { CascadeType.ALL })
	@JoinTable(name = "event_menus", joinColumns = { @JoinColumn(name = "menu_id") }, 
	inverseJoinColumns = {@JoinColumn(name = "event_id") })
	List<Event> events = new ArrayList<>();
}
