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
		<span class="badge"><%=request.getParameter("msg")!=null?request.getParameter("msg"):""%></span>
		<div class="page-header">All Products</div>
		<table class="table">
			<%
				List<Product> products = (List<Product>) request.getAttribute("allProducts");
				for (Product product : products) {
			%>
			<tr>
				<td><%=product.getId()%></td>
				<td><%=product.getName()%></td>
				<td>&#8377;<%=product.getPrice()%></td>
				<td><%=product.getMakeDate()%></td>
				<td>
					<a href="edit-product?id=<%=product.getId()%>">
						<i class="glyphicon glyphicon-edit"></i>
					</a>
				</td>
				<td>
					<a href="delete-product?id=<%=product.getId()%>">
						<i class="glyphicon glyphicon-trash"></i>
					</a>
				</td>
			</tr>
			<%
				}
			%>
		</table>
		<hr />

		<div class="col-xs-8 col-sm-5 col-md-5">
			<div class="panel panel-default">
				<div class="panel-heading">Product Form</div>
				<div class="panel-body">
					<form action="save-product" method="post">
						<div class="form-group">
							<label>Id</label> <input class="form-control" class=""
								type="number" name="id">
						</div>
						<div class="form-group">
							<label>Name</label> <input class="form-control" type="text"
								name="name">
						</div>
						<div class="form-group">
							<label>Price</label> <input class="form-control" type="number"
								name="price">
						</div>
						<div class="form-group">
							<label>Make-date</label> <input class="form-control" type="date"
								name="makeDate">
						</div>
						<div class="form-group">
							<label>Description</label>
							<textarea class="form-control" name="description"></textarea>
						</div>
						<button class="btn btn-primary">save</button>
					</form>
				</div>
			</div>
		</div>

	</div>

</body>
</html>










