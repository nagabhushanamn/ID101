<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>index</title>
<link href="bootstrap/css/bootstrap.css" rel="stylesheet">
</head>
<body>

	<div class="container">
		<div class="page-header">simple-web-app</div>

		<%
			String user = (String) request.getAttribute("user");
		%>

		<div class="alert alert-info">
			Hello <%=user %>, <br /> You have registered successfully
		</div>

	</div>

</body>
</html>