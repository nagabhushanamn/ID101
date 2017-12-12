<!DOCTYPE html>
<%@page import="com.comp.pm.model.Product"%>
<%@page import="java.util.List"%>
<html>
<head>
<meta charset="UTF-8">
<title>PM</title>
<link href="bootstrap/css/bootstrap.css" rel="stylesheet">
</head>
<body>

	<nav class="navbar navbar-default">
		<div class="container-fluid">
			<div class="navbar-header">
				<a href="/" class="navbar-brand">PM-v1</a>
			</div>
		</div>
	</nav>
	<div class="container">
		<div class="col-xs-8 col-sm-5 col-md-5">
			<div class="panel panel-default">
				<div class="panel-heading">Product Form</div>
				<div class="panel-body">
					<% Product product=(Product)request.getAttribute("product"); %>
					<form action="update-product" method="post">
						<div class="form-group">
							<label>Id</label> 
							<input readonly="readonly" class="form-control" class="" type="number" name="id" value="<%=product.getId()%>">
						</div>
						<div class="form-group">
							<label>Name</label> 
							<input class="form-control" type="text" name="name"  value="<%=product.getName()%>">
						</div>
						<div class="form-group">
							<label>Price</label> 
							<input class="form-control" type="number" name="price"  value="<%=product.getPrice()%>">
						</div>
						<div class="form-group">
							<label>Make-date</label> 
							<input class="form-control" type="date" name="makeDate"  value="<%=product.getMakeDate()%>">
						</div>
						<div class="form-group">
							<label>Description</label>
							<textarea class="form-control" name="description">
								<%=product.getDescription() %>
							</textarea>
						</div>
						<button class="btn btn-primary">save</button>
					</form>
				</div>
			</div>
		</div>

	</div>

</body>
</html>










