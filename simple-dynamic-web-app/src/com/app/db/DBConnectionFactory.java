package com.app.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnectionFactory {
	
	static {
		try {
			Class.forName("com.mysql.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}

	public static Connection getMySQLConnection() throws SQLException {
		String url = "jdbc:mysql://localhost:3306/demo"; // oracle ==> jdbc:oracle:thin:@localhost:1521:xe
		String user = "root";
		String password = "root";
		return DriverManager.getConnection(url, user, password);
	}

}
