package com.ems.services;

import java.util.List;

import com.ems.pojos.UserTodo;

public interface UserTodoServices {
 List<UserTodo> showEmployeeTodo(String email);
 UserTodo updateTask(UserTodo task);
}
