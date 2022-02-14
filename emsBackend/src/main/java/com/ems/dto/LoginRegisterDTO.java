package com.ems.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LoginRegisterDTO {
	private int id;
	private String name;
	private String dob;
	private String contactNumber;
	private String adhaarNumber;
	private String email;
	private String password;
	private int priorityStatus;
}
