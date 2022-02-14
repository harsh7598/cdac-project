package com.ems.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="emp_todo")
public class EmpTodo extends BaseEntity{
	@Column(length = 200)
private String todo;
	@Column(length = 20)
private String status;
	
	@ManyToOne
	@JoinColumn(name = "emp_id",nullable = false)
	@MapsId
	private Employee employee;
	
}
