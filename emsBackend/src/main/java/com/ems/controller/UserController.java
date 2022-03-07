package com.ems.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ems.dao.UserTodoDao;
import com.ems.pojos.UserTodo;
import com.ems.services.IUserServices;
import com.ems.services.UserTodoServices;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping
public class UserController {
	@Autowired
	UserTodoServices userTodoServices;
	@Autowired
	IUserServices userService;
	
	@GetMapping("/asigntasks")
	public List<UserTodo> AsignTasks (HttpServletRequest request){
		return userTodoServices.showEmployeeTodo(request.getUserPrincipal().getName());
		
	}
	
	@GetMapping("/nameaccess")
	public String accessName(HttpServletRequest request)
	{
		return userService.accessUsername(request.getUserPrincipal().getName());
	}
	
	@PutMapping("/updatetask")
	public ResponseEntity<?>updateTask(@RequestBody UserTodo task){
		return ResponseEntity.ok(userTodoServices.updateTask(task));
	}
}
