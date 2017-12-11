<!DOCTYPE html>
<%@page import="java.util.*"%>
<%@page import="java.io.*"%>
<html>
<head>
<meta charset="UTF-8">
<title>index</title>
<link href="bootstrap/css/bootstrap.css" rel="stylesheet">
</head>
<body>

	<div class="container">
		<div class="page-header">JSP - basics</div>
		
		<%@include file="banner.html" %>

		<%
			int a = 12;
			int b = 13;
		%>

		<%
			int c = a + b;
		%>

		Total <span class="badge"><%=c + 100%></span>

		<hr />

		<%!int count = 0;%>

		<%!public void jspInit() {
			count = 100;
		}%>

		<%
			count++;
		%>

		Total : <span class="badge"><%=count%></span>

		<%-- <% int v=100+200; %>  --%>

		<hr />


		Today :
		<%=new Date()%>




	</div>

</body>
</html>