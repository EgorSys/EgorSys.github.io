$( document ).ready(function() {
 
    $( "#but" ).on('click',function( ) {
        $(".tasks").append("<div><p class='nortxt'></p><button class='del'>Delete task</button><button class='edit'>Edit</button></div>");
	$(".tasks div:last-child p").append($("#input").val());
    });
    $(".tasks").on('click','.del',function( ) {
	$(".tasks div:hover .del").remove();
	$(".tasks div:hover .edit").remove();
	$(".tasks div:hover").append("<button class='Yes'>Yes</button><button class='No'>No</button><p id='Aus'>Are You sure?</p>");
	$(".tasks div:hover").toggleClass("aus");
    });
    $(".tasks").on('click','.Yes',function( ) {
	$(".tasks div:hover").remove();
    });
    $(".tasks").on('click',".No",function() {
	$(".tasks div:hover .Yes").remove();
	$(".tasks div:hover .No").remove();
	$(".tasks div:hover #Aus").remove();
	$(".tasks div:hover").toggleClass("aus");
	$(".tasks div:hover").append("<button class='del'>Delete task</button><button class='edit'>Edit</button>")
    });
    $(".inputsub").on('click','#dela',function( ) {
	$(".tasks div").remove();
    });
    $(".tasks").on('click','.edit', function() {
	$(".tasks div:hover").append("<input class='edin'></input>");
	$(".tasks div:hover .nortxt").remove();
	$(".tasks div:hover .edit").remove();
	$(".tasks div:hover .del").remove();
	$(".tasks div:hover").append("<button class='done'>Done</button>");
    });
    $(".tasks").on('click','.done', function() {
	$(".tasks div:hover").append("<p class='nortxt'></p><button class='del'>Delete task</button><button class='edit'>Edit</button>");
	$(".tasks div:hover .nortxt").append($("div:hover .edin").val());
	$(".tasks div:hover .edin").remove();
	$(".tasks div:hover .done").remove();
    });
});
