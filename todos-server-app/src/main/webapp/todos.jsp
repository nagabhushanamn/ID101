<!DOCTYPE html>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
<meta charset="UTF-8">
<title>index</title>
<link href="./css/bootstrap.css" rel="stylesheet" />
</head>
<body class="container">

	<div class="page-header">Todos - appln</div>

	<ul class="list-group">
		<c:forEach var="todo" items="${todos}">
			<li class="list-group-item">${todo.text}- ${todo.completed }</li>
		</c:forEach>
	</ul>


</body>
</html>