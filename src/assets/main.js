$(function() {
	$.ajax({
		url: 'https://www.codeschool.com/users/cstielper.json',
		dataType: 'jsonp',
		success: function(response) {
			console.log(response.courses.completed);
			for(var i = 0; i < response.courses.completed.length; i++) {
				var course = $('<div class="course">');
				$('#badges').append(course);
				$(course).append('<h3 title="' + response.courses.completed[i].title + '">' + response.courses.completed[i].title + '</h3>');
				$(course).append('<img src="' + response.courses.completed[i].badge + '">');
				$(course).append('<a href="' + response.courses.completed[i].url + '" target="_blank" class="btn btn-primary">' + response.courses.completed[i].title + '</a>');
			}
		}
	});
});
