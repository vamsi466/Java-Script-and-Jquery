$(document).ready(function()
{
  // $(".video-mask1").click(function(e){
  //   alert("hello");
  // })
    $(".home").click(function(){
        $.ajax({url: "./Templates/home.html", success: function(result)
		{
      console.log(result);
            $(".loader").html(result);
        }});
    });

	$(".cricket").click(function(){
        $.ajax({url: "./Templates/cricket.html", success: function(result)
		{
            $(".loader").html(result);
            $(".dynamicSrc").attr("src", "JS/Slideshow.js");
        }});

    });
	$(".painting").click(function(){
        $.ajax({url: "Templates/painting.html", success: function(result)

		{

            $(".loader").html(result);
            $(".dynamicSrc").attr("src", "JS/Slideshow.js");
        }});
    });
	$(".chess").click(function(){
        $.ajax({url: "Templates/chess.html", success: function(result)
		{
            $(".loader").html(result);
            $(".dynamicSrc").attr("src", "JS/Slideshow.js");
        }});
    });


/*Modal opening and closing and autoplay of that video*/
function clearModal(){
  $(".modal-body").empty();

}

$(".video-mask").click(function(e){
  var iFrame = $(e.target).siblings().clone();

  //iFrame.attr("height","60%");
  iFrame.attr({
      height:"60%",
      width:"100%"
  });
  var url = $(iFrame).attr('src')+"?autoplay=1";
  iFrame.attr("src",url);

  $(".modal-body").html(iFrame);

  $("#myModal").click(function(){
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

$(".close").click(clearModal);
$("#closeVideo").click(clearModal);

});
