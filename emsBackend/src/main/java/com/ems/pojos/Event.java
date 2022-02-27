package com.ems.pojos;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "event")
public class Event extends BaseEntity{
	
	@Column(length = 20)
	private String name;
	
	@Enumerated(value = EnumType.STRING)
	private EventType type;
	private LocalDate date;
//	@Column(name="start_time")
//	private LocalDateTime startTime;
//	@Column(name="end_time")
//	private LocalDateTime endTime;
	
	@Column(name="guest_count")
	private int guestCount;
	private double totalCost;
	@Column(length = 20)
	private String status;
	@Column(length = 20)
	private String progress;
	
	private boolean photography;
	private boolean videography;
	private boolean album;
	private boolean drone;
	private boolean crane;
	
	@ManyToOne
	@JoinColumn(name = "studio_id")
	private Studio studio;
	
	@ManyToOne
	@JoinColumn(name = "venue_id",nullable = false)
	private Venue bookedVenue;

	@ManyToOne
	@JoinColumn(name = "cater_id")
//	@JoinColumn(name = "cater_id")
	private Caters bookedCater;
	
	@ManyToMany(mappedBy = "regevents")
    private List<User> users = new ArrayList<>();

	@ManyToMany(mappedBy="events")
	List<Menu> menus = new ArrayList<>();

	public Event(String name, EventType type, LocalDate date, int guestCount, boolean photography, boolean videography,
			boolean album, boolean drone, boolean crane, Venue bookedVenue,List<Menu> menus) {
		super();
		this.name = name;
		this.type = type;
		this.date = date;
		this.guestCount = guestCount;
		this.photography = photography;
		this.videography = videography;
		this.album = album;
		this.drone = drone;
		this.crane = crane;
		this.bookedVenue = bookedVenue;
		this.menus=menus;
	}


}
