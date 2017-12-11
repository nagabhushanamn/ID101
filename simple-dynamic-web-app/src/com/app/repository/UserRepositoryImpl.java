package com.app.repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.app.db.DBConnectionFactory;
import com.app.model.User;

public class UserRepositoryImpl implements UserRepository {

	@Override
	public void save(User user) {
		Connection connection = null;
		try {
			connection = DBConnectionFactory.getMySQLConnection();
			String sql = "insert into demo.SAPIENT_USERS values(?,?,?)";
			PreparedStatement ps = connection.prepareStatement(sql);
			ps.setString(1, user.getUserName());
			ps.setString(2, user.getPassword());
			ps.setString(3, user.getName());
			int r = ps.executeUpdate();
			if (r != 1) {
				throw new UserException("User not Registred");
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			if (connection != null) {
				try {
					connection.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
	}

	@Override
	public User find(String userName) {
		return null;
	}

}
