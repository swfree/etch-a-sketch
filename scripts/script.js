$(document).ready(function(){
	var $grid1 = 0;
	var divClone = $(".container").clone();
	var colors = ['#ff0000','#ff9900','#ffff00','#00ff00','#0000ff','#6600ff'];
	var index = 0;

	/* Gets user's color choice */
	$("#colorButton").click(function(event){
		if($(this).prop('value')=='Blue'){
			$(this).prop('value','Rainbow');
		} else {
			$(this).prop('value','Blue');
		};
	});

	/* Creates the grid */
	$("#hit").click(function(event){
		$(".container").replaceWith(divClone.clone());
		$grid1 = +$("#grid_size").val();
		var boxSize = ''+((700 - ($grid1 * 2)) / $grid1)+'px'; 
		for(i =1; i <= $grid1; i++){
			for(j = 1; j <= $grid1; j++){
				$(".container").append("<div class='first_style'/>");
			};
		};
		$(".first_style").css({'height':boxSize,'width':boxSize});
		$(".second_stlye").css({'height':boxSize,'width':boxSize});

		/* Changes div colors on mouseenter */
		if($("#colorButton").prop('value')=='Blue'){
			$(".first_style").mouseenter(function(){
				$(this).removeClass("first_style").addClass("second_style");
			});
		} else {
			$(".first_style").mouseenter(function(){
				var my_color = colors[index];
				$(this).css('background-color',my_color);
				if(index===5){
					index=0;
				} else {
					index++;
				};
				$(this).removeClass("first_style").addClass("second_style");
			});
		};
	});
});