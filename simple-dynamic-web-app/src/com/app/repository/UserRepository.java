package com.app.repository;

import com.app.model.User;

public interface UserRepository {

	public void save(User user);

	public User find(String userName);

}
