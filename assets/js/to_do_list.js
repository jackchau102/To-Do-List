// Strike through when click on <li>

$("ul").on("click", "li", function(){
	$(this).toggleClass("selected");
})

// Fade through when click on "X"
// Need to remove the <li> (parent of <span>)
// Need to stop bubbling so the not to affect the strikethrough of <li>

$("ul").on("click", "span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});

	event.stopPropagation();
})

// Input field
// When press enter, retrieve information and add to list

$("input[type='text'").on("keypress", function(event){
	if(event.which ===13){
		var text = $(this).val();
		var toAppend = "<li><span><i class='fas fa-trash'></i></span> " + text + "</li>";
		$("ul").append(toAppend);
		$(this).val("");
		$(this).attr("placeholder", "Add New Todo");
	}
})

// Make the input field appear and disappear when icon is clicked

$("h3 i").on("click", function(){
	$("input[type='text']").fadeToggle();
})
