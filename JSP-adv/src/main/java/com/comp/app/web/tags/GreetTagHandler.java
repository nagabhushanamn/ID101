package com.comp.app.web.tags;

import java.io.IOException;
import java.time.LocalTime;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.Tag;
import javax.servlet.jsp.tagext.TagSupport;

public class GreetTagHandler extends TagSupport {

	@Override
	public int doStartTag() throws JspException {

		LocalTime localTime = LocalTime.now();
		JspWriter writer = pageContext.getOut();

		String message = "greetings";
		
		

		if (localTime.getHour() < 9) {
			message = "Good Morning";
		}

		try {
			writer.write(message);
		} catch (IOException e) {
			e.printStackTrace();
		}

		return SKIP_PAGE;

	}

}
