package com.ems.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ems.dao.UserDao;
import com.ems.dao.UserTodoDao;
import com.ems.pojos.UserTodo;

@Service
@Transactional
public class UserTodoServicesIMPl implements UserTodoServices {
@Autowired
UserTodoDao userTodoDao;

@Autowired
UserDao userDao;

@Override
	public List<UserTodo> showEmployeeTodo(String email){
	System.out.println("Taskkkkkkkkk"+userDao.findByEmail(email).orElseThrow().getTodoList());
		
		return userDao.findByEmail(email).orElseThrow().getTodoList();
	}

	@Override
	public UserTodo updateTask(UserTodo task) {
		return userTodoDao.save(task);
	}
}
