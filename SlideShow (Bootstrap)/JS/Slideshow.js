$(document).ready(function()
{
    $(".home").click(function(){
        $.ajax({url: "./Templates/home.html", success: function(result)
		{
      console.log(result);
            $(".loader").html(result);
        }});
    });

	$(".cricket").click(function(){
        $.ajax({url: "Templates/cricket.html", success: function(result)
		{
            $(".loader").html(result);
        }});
    });
	$(".painting").click(function(){
        $.ajax({url: "Templates/painting.html", success: function(result)
		{

            $(".loader").html(result);
        }});
    });
	$(".chess").click(function(){
        $.ajax({url: "Templates/chess.html", success: function(result)
		{
            $(".loader").html(result);
        }});
    });



});
