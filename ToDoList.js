$( document ).ready(function() {
 
    $( "#but" ).on('click',function( ) {
        $(".tasks").append("<div><p></p><button class='del'>Delete task</button></div>");
	$(".tasks div:last-child p").append($("#input").val())
    });
    $(".tasks").on('click','.del',function( ) {
	$(".tasks div:hover").remove();
    });
});