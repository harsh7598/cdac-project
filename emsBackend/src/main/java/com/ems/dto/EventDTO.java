package com.ems.dto;

import java.time.LocalDate;
import java.util.List;

import com.ems.pojos.EventType;
import com.ems.pojos.Menu;
import com.ems.pojos.Studio;
import com.ems.pojos.Venue;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
//{name: 'dfg', type: 'dfha', date: '2022-02-16', guestCount: '100'}
@Data
@AllArgsConstructor
@NoArgsConstructor
public class EventDTO {
private int id;
private String name;
private EventType type;
private LocalDate date;
private int guestCount;
private String status;
private Studio studio;
private boolean photography;
private boolean videography;
private boolean album;
private boolean drone;
private boolean crane;
private List<Menu> menus;
private Venue bookedVenue;
private double totalCost;

}
