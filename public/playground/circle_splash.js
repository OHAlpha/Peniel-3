$(document).ready(function () {
	$("#enter").click(function () {
		$("#center_circle").animate( {
			width: '600px', height: '600px'
		}, 1000, function () {
			;
		});
		$("#spacer_right").animate( {
			flexGrow: '10'
		}, 1000);
	});
});