package com.ems.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.ems.pojos.Caters;
import com.ems.pojos.EventType;
import com.ems.pojos.Venue;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EventDTO {
private String name;
private EventType type;
private LocalDate date;
private int guestCount;
private Venue bookedVenue;
private Caters bookedCater;


}
