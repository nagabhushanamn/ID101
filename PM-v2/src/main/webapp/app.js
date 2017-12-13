/**
 * 
 */

$(document).ready(function() {

	let form = $('#product-form-panel');
	let btn = $("#toggle-btn");
	let isFormVisible = false;
	btn.click(function() {
		form.toggle();
		isFormVisible = !isFormVisible;
		if (isFormVisible) {
			btn.text('Hide');
		} else {
			btn.text('New Product');
		}
	});

});