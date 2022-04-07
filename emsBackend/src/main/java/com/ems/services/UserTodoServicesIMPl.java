package com.ems.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ems.dao.UserDao;
import com.ems.dao.UserTodoDao;
import com.ems.pojos.User;
import com.ems.pojos.UserTodo;

@Service
@Transactional
public class UserTodoServicesIMPl implements UserTodoServices {
@Autowired
UserTodoDao userTodoDao;

@Autowired
UserDao userDao;

@Autowired
private  EmailSenderService mailservice;

@Override
	public List<UserTodo> showEmployeeTodo(String email){
	System.out.println("Taskkkkkkkkk"+userDao.findByEmail(email).orElseThrow().getTodoList());		
		return userDao.findByEmail(email).orElseThrow().getTodoList();
	}

	@Override
	public UserTodo updateTask(UserTodo task) {
		return userTodoDao.save(task);
	}

	@Override
	public List<UserTodo> getTodoByEmployee(int id) {	
		return userDao.findById(id).orElseThrow().getTodoList();
	}

	@Override
	public void assignTask(int id, UserTodo task) {
		task.setStatus("in progress");
		User u= userDao.findById(id).orElseThrow();
		u.getTodoList().add(task);
		userTodoDao.save(task);
		userDao.save(u);
		mailservice.sendMail(u.getEmail(),"New Task Assigned","Manager Assigned You New Task," +task.getTodo());
		
//		userDao.findById(id).orElseThrow().getTodoList().add(new UserTodo(task,"incomplete"));
	}

	@Override
	public void deleteTask(int id) {
		userTodoDao.deleteById(id);
	}
}
