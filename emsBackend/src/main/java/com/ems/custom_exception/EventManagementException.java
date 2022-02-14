package com.ems.custom_exception;

public class EventManagementException extends Exception{
	private static final long serialVersionUID = 1L;

	EventManagementException(String msg){
		super(msg);
	}
}
