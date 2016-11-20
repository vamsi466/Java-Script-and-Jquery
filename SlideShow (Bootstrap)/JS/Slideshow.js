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


/*Modal opening and closing and autoplay of that video*/
function clearModal(){
  $(".modal-body").empty();

}

$("document").delegate('.video-mask','click',function(e){
  var iFrame = $(e.target).siblings().clone();
  console.log("iFrame")

  iFrame.attr("height","60%");
  var url = $(iFrame).attr('src')+"?autoplay=1";
  iFrame.attr("src",url);

  $(".modal-body").html(iFrame);

  $("#myModal").on('click',function(){
    var isOpen;
    setTimeout(function(){
      isOpen = $("body").hasClass("modal-open");

    },500);
    setTimeout(function(){
      if(!isOpen){
        clearModal();
      }

    },550);
  });

});

$(".close").on('click',clearModal);
$("#closeVideo").on('click',clearModal);

});
