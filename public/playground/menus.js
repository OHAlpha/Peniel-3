var cpw;
var cph;
var thresh;

var INVISIBLE = 0;
var SHOWING = 1;
var VISIBLE = 2;
var IDLING = 3;
var HIDING = 4;

var topstate = INVISIBLE;
var topid;
var bottomstate = INVISIBLE;
var bottomid;

$(document).ready(function () {
	cpw = $("#center_parent").width();
	cph = $("#center_parent").height();
	thresh = cph - 50;

	$(window).resize(function() {
		cpw = $("#center_parent").width();
		cph = $("#center_parent").height();
		thresh = cph - 50;
	});
	
	$("#center_parent").mousemove(function (e) {
		if (e.pageY < 50 && topstate == INVISIBLE) {
			topstate = SHOWING;
			$("#top_menu").animate( {
				top: '0'
			}, 'slow', function () {
				topstate = VISIBLE;
			});
		}
		if (e.pageY < 50 && topstate == HIDING) {
			$("top_menu").stop(true);
			topstate = SHOWING;
			$("#top_menu").animate( {
				top: '0'
			}, 'fast', function () {
				topstate = VISIBLE;
			});
		}
		if (e.pageY > 50 && topstate == SHOWING) {
			$("top_menu").stop(true);
			topstate = HIDING;
			$("top_menu").animate( {
				top: '-60'
			}, 'fast', function () {
				topstate = INVISIBLE;
			});
		}
		if (e.pageY > 50 && topstate == VISIBLE) {
			topstate = IDLING;
			topid = window.setTimeout(function () {
				topstate = HIDING;
				$("#top_menu").animate( {
					top: '-60'
				}, 'slow', function () {
					topstate = INVISIBLE;
				});
			}, [1000]);
		}
		if (e.pageY > thresh && bottomstate == INVISIBLE) {
			bottomstate = SHOWING;
			$("#bottom_menu").animate( {
				bottom: '0'
			}, 'slow', function () {
				bottomstate = VISIBLE;
			});
		}
		if (e.pageY > thresh && bottomstate == HIDING) {
			$("bottom_menu").stop(true);
			bottomstate = SHOWING;
			$("#bottom_menu").animate( {
				bottom: '0'
			}, 'fast', function () {
				bottomstate = VISIBLE;
			});
		}
		if (e.pageY < thresh && bottomstate == SHOWING) {
			$("bottom_menu").stop(true);
			bottomstate = HIDING;
			$("bottom_menu").animate( {
				bottom: '-60'
			}, 'fast', function () {
				bottomstate = INVISIBLE;
			});
		}
		if (e.pageY < thresh && bottomstate == VISIBLE) {
			bottomstate = IDLING;
			bottomid = window.setTimeout(function () {
				bottomstate = HIDING;
				$("#bottom_menu").animate( {
					bottom: '-60'
				}, 'slow', function () {
					bottomstate = INVISIBLE;
				});
			}, [1000]);
		}
	});
	$("#top_menu").mouseleave(function (e) {
		if (topstate == VISIBLE) {
			topstate = IDLING;
			topid = window.setTimeout(function () {
				topstate = HIDING;
				$("#top_menu").animate( {
					top: '-60'
				}, 'slow', function () {
					topstate = INVISIBLE;
				});
			}, [1000]);
		}
	});
	$("#top_menu").mouseenter(function (e) {
		if (topstate == IDLING) {
			window.clearTimeout(topid);
			topstate = VISIBLE;
		}
		if (topstate == HIDING) {
			$("top_menu").stop(true);
			topstate = SHOWING;
			$("#top_menu").animate( {
				top: '0'
			}, 'fast', function () {
				topstate = VISIBLE;
			});
		}
	});
	$("#bottom_menu").mouseleave(function (e) {
		if (bottomstate == VISIBLE) {
			bottomstate = IDLING;
			bottomid = window.setTimeout(function () {
				bottomstate = HIDING;
				$("#bottom_menu").animate( {
					bottom: '-60'
				}, 'slow', function () {
					bottomstate = INVISIBLE;
				});
			}, [1000]);
		}
	});
	$("#bottom_menu").mouseenter(function (e) {
		if (bottomstate == IDLING) {
			window.clearTimeout(bottomid);
			bottomstate = VISIBLE;
		}
		if (bottomstate == HIDING) {
			$("bottom_menu").stop(true);
			bottomstate = SHOWING;
			$("#bottom_menu").animate( {
				bottom: '0'
			}, 'fast', function () {
				bottomstate = VISIBLE;
			});
		}
	});
});
