package com.ems.services;

import com.ems.pojos.User;

public interface IUserServices {

	public User addUser(User user);

	public User validateUser(String email);

}
