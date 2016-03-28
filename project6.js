$(document).ready(function(){
	function getRandomColor(){
		var hex = Math.floor(Math.random() * 0xFFFFFF);
		return "#" + ("000000" + hex.toString(16)).substr(-6);
	};

$('.grey').mouseenter(function(){
	$(this).css('background', getRandomColor());
	$(this).css('box-shadow', "0 0 8px #00FF99");
	//$(this).css('z-index', "100000");
	//$(this).toggleClass('highlighted');
	//$(this).addClass('highlighted').removeClass('highlighted');
	});

$('.grey').on("mouseleave", function(){
	$(this).css('box-shadow', "none");
	//$(this).css('z-index', "1");
	});
});






$(document).ready(function(){
	$('.grey1').click(function(){
		$(this).fadeOut('fast');
	});
});