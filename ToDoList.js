$( document ).ready(function() {
 
    $( "#but" ).click(function( ) {
        $(".tasks").append("<div><p></p><button>Delete task</button></div>");
	$(".tasks div:last-child p").append($("#input").val())
	$("tasks div:last-child button").toggleClass("del");
    });
});