<!DOCTYPE html>
<%@page import="com.comp.pm.model.Product"%>
<%@page import="java.util.List"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
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
		<span class="badge">${param.msg}</span>
		<div class="page-header">All Products</div>
		<c:if test="${allProducts.size() eq 0 }">
			<div class="alert alert-danger">No products</div>
		</c:if>
		<table class="table">
			<c:forEach var="product" items="${allProducts}">
				<tr>
					<td>${product.id}</td>
					<td>${product.name}</td>
					<td>&#8377;${product.price}</td>
					<td><fmt:formatDate value="${product.makeDate}"
							pattern="dd/MMM/yyyy" var="fd" /> ${fd }</td>
					<td><a href="edit-product?id=${product.id}"> <i
							class="glyphicon glyphicon-edit"></i>
					</a></td>
					<td><a href="delete-product?id=${product.id}"> <i
							class="glyphicon glyphicon-trash"></i>
					</a></td>
				</tr>
			</c:forEach>
		</table>
		<hr />
		<button id="toggle-btn" class="btn btn-danger">New Product</button>
		<div id="product-form-panel" class="row" style="display: none">
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

	</div>

	<hr />

	division address : ${initParam.address }

	<script type="text/javascript" src="jquery-3.2.1.js"></script>
	<script type="text/javascript" src="app.js"></script>

</body>
</html>










