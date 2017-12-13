/**
 * 
 */

$(function() {

	$('#todosBtn').click(function(e) {
		e.preventDefault();

		let box = $('#todos-box');

		$.ajax('todos', {
			method : 'GET',
			success : function(resp) {
				resp.todos.forEach(function(todo) {
					box.append(todo.text + " <br/>");
				});
			}
		});

	});

})