 $(document).ready(function(){
   $(".activeblock").on('click',function(eventstarted){
     var activatedBlock = eventstarted.target;

     var firstPlayer = $(".player1").hasClass("activeplayer");
     var secondPlayer = $(".player2").hasClass("activeplayer");



     if(firstPlayer && !secondPlayer){

       $(".player1").removeClass("activeplayer");
       $(".player2").addClass("activeplayer");
       $(activatedBlock).css("background-color","lightblue");
       $(activatedBlock).text("X");

     }

     if(!firstPlayer && secondPlayer){

       $(".player1").addClass("activeplayer");
       $(".player2").removeClass("activeplayer");
       $(activatedBlock).css("background-color","blue");
       $(activatedBlock).text("O");

     }
     $(activatedBlock).off('click');
     $($(activatedBlock).children()[0]).off("click");
   })
 });
