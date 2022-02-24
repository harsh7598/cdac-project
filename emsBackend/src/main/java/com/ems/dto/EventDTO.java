package com.ems.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EventDTO {
private String eventName;
private String eventType;
private LocalDate date;
private LocalDateTime startTime;
private LocalDateTime endTime;
private int guestCount;
}
