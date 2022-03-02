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

	public List<UserTodo> showEmployeeTodo(String email){
		
		return userTodoDao.findByUser(userDao.findByEmail(email).orElseThrow());
	}
}
