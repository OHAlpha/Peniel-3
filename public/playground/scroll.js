$(document).ready(function () {
	for( var i = 0; i < 15; i++ )
		$('#dots').append('<div class="dot" index="' + i + '" style="left: ' + ( 200 * (i % 3) + 100 ) + 'px; top: ' + ( 200 * i ) + 'px;"></div>');
	$(window).scroll(function() {
		dots = $('.dot');
		var top = $(window).scrollTop();
		var bottom = top + $(window).height();
		var num = 0;
		dots.each(function(index) {
			var dot = $(".dot[index='" + index + "']");
			var doty = dot.position().top;
			var doth = dot.height();
			dot.text('top: ' + doty + ', height: ' + doth);
			if( doty < top && (doty + doth) > top )
				num += 1;
			else if( doty >= top && doty < bottom )
				num += 1;
			else if( doty < bottom && (doty + doth) > bottom )
				num += 1;
		});
		$('#num').text('top: ' + top + ', bottom: ' + bottom + ', num: ' + num);
	});
});
