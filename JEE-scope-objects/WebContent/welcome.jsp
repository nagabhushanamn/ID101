<!DOCTYPE html>
<%@page import="java.util.Date"%>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>JEE - scope objects</h1>

	<h1> isNew : <%=session.isNew() %> </h1> 
	<h1> ID : <%=session.getId() %> </h1> 
	<h1> creation time : <%=new Date(session.getCreationTime()) %> </h1>
	<h1> last accessed time : <%=new Date(session.getLastAccessedTime()) %> </h1>

	<h1><a href="stop-session">logout</a></h1>

</body>
</html>