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

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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
@JsonIgnoreProperties(value = {"hibernateLazyInitializer","handler"})
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
	@JoinColumn(name = "venue_id")
	private Venue bookedVenue;

	@ManyToOne
	@JoinColumn(name = "cater_id")
	private Caters bookedCater;
	
//	@ManyToMany(mappedBy = "regevents")
//    private List<User> users = new ArrayList<>();

	@ManyToMany(cascade = { CascadeType.ALL },fetch = FetchType.EAGER)
	@JoinTable(name = "event_menus", joinColumns = { @JoinColumn(name = "event_id") }, 
	inverseJoinColumns = {@JoinColumn(name = "menu_id") })
	List<Menu> menus = new ArrayList<>();
	
//	@ManyToMany(mappedBy="events")
//	List<Menu> menus = new ArrayList<>();

	public Event(String name, EventType type, LocalDate date, int guestCount, boolean photography, boolean videography,
			boolean album, boolean drone, boolean crane, Venue bookedVenue) {
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
	}

	@Override
	public String toString() {
		return "Event [name=" + name + ", type=" + type + ", date=" + date + ", guestCount=" + guestCount
				+ ", totalCost=" + totalCost + ", status=" + status + ", progress=" + progress + ", photography="
				+ photography + ", videography=" + videography + ", album=" + album + ", drone=" + drone + ", crane="
				+ crane + ", studio=" + studio + ", bookedVenue=" + bookedVenue + ", bookedCater=" + bookedCater
				+ ", menus=" + menus + "]";
	}
}
