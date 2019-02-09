// Check of specific todos by clicking
	// by makeing .completed in css we delete all 
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
	});

		
// Click on X to delete Todo

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(1000, function(){
		$(this).remove();
	});
	event.stopPropagation();
});
	
$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		//grabbing new todo text from imput
		var todoText = $(this).val();
		$(this).val("");
		//creat new li in ul
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
	}
})

$("h1").on("click", ".fa-plus", function(){
	$("input[type='text']").fadeToggle();
});