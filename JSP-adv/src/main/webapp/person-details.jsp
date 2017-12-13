<!DOCTYPE html>
<%@page import="java.util.Date"%>
<%@page import="com.comp.app.model.Person"%>
<%@taglib uri="/WEB-INF/sapient-tags.tld" prefix="sapient"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<html>
<head>
<meta charset="UTF-8">
<title>index</title>
<link href="css/bootstrap.css" rel="stylesheet">
</head>
<body class="container">
	<div class="page-header">JSP adv</div>

	<c:if test="${1==2}">
		<h1>U will get break</h1>
	</c:if>
	<c:choose>
		<c:when test="false">
			<h1>Veg</h1>
		</c:when>
		<c:when test="false">
			<h1>Non-Veg</h1>
		</c:when>
		<c:otherwise>
			<!-- <h1>Drinks</h1> -->
		</c:otherwise>
	</c:choose>
	
	<%-- <c:forEach var="i" begin="1" end="10" varStatus="s">
			<h1>${i} </h1>
		 </c:forEach>
 	--%>
 	
 	<%
 		String[] menu={"poha","semiya","idly"};
 		//pageContext.setAttribute("menu", menu);
 		request.setAttribute("menu", menu);
 		
 		Date date=new Date();
 		request.setAttribute("now", date);
 		
 	%>
 	
 	
 	<%--
 	 c:forEach var="item" items="${menu}">
 		<h1>${item}</h1>
 	</c:forEach>
 	 --%>
 	 
 	 <fmt:formatDate value="${now}" pattern="dd-MMM-yyyy" var="newNow"/>
 	 <h1>${newNow}</h1>
 	 
 	 
 	 ${fn:length('nag')}
 	 ${fn:startsWith("sapient","sap") }
 	
	<hr />
	<sapient:greet />
	<hr />

	<div class="alert alert-info">
		<pre>
			Name  : ${requestScope.person.name}
			Email : ${person.email }
			Mobile: ${person.mob }
			Dog   : ${person.dog.name }
		</pre>
	</div>



	<div class="well">
		<jsp:useBean id="person" class="com.comp.app.model.Person"
			scope="request"></jsp:useBean>
		<pre>
			Name  : <jsp:getProperty property="name" name="person" />
			Email : <jsp:getProperty property="email" name="person" />
			Mobile: <jsp:getProperty property="mob" name="person" />
		</pre>
	</div>

	<div class="well">
		<%
			Person p = (Person) request.getAttribute("person");
		%>
		<pre>
			Name  : <%=p.getName()%>
			Email : <%=p.getEmail()%>
			Mobile: <%=p.getMob()%>
			Dog Name : <%=p.getDog().getName()%>
		</pre>
	</div>



	<hr />


</body>
</html>










