 function gameDecision(){

	var blocks = $(".activeblock");
	var textinblocks = [];
	for(var i = 0; i<blocks.length;i++){
		textinblocks.push($(blocks[i]).text());
	}

	if((textinblocks[0] == "X" && textinblocks[1] == "X" &&  textinblocks[2] == "X") || (textinblocks[3] == "X" && textinblocks[4] == "X" &&  textinblocks[5] == "X") || (textinblocks[6] == "X" && textinblocks[7] == "X" &&  textinblocks[8] == "X") || (textinblocks[0] == "X" && textinblocks[3] == "X" &&  textinblocks[6] == "X") || (textinblocks[1] == "X" && textinblocks[4] == "X" &&  textinblocks[7] == "X") || (textinblocks[2] == "X" && textinblocks[5] == "X" &&  textinblocks[8] == "X") || (textinblocks[0] == "X" && textinblocks[4] == "X" &&  textinblocks[8] == "X") ||(textinblocks[2] == "X" && textinblocks[4] == "X" &&  textinblocks[6]   == "X" )){

		return "PlayerOne";

	}

	else if((textinblocks[0] == "O" && textinblocks[1] == "O" &&  textinblocks[2] == "O") || (textinblocks[3] == "O" && textinblocks[4] == "O" &&  textinblocks[5] == "O") || (textinblocks[6] == "O" && textinblocks[7] == "O" &&  textinblocks[8] == "O") || (textinblocks[0] == "O" && textinblocks[3] == "O" &&  textinblocks[6] == "O") || (textinblocks[1] == "O" && textinblocks[4] == "O" &&  textinblocks[7] == "O") || (textinblocks[2] == "O" && textinblocks[5] == "O" &&  textinblocks[8] == "O") || (textinblocks[0] == "O" && textinblocks[4] == "O" &&  textinblocks[8] == "O") ||(textinblocks[2] == "O" && textinblocks[4] == "O" &&  textinblocks[6] == "O")    ){

		return "PlayerTwo"

	}

	if((textinblocks.indexOf("clickme")) != -1){

		return "resume";

	}else{

		return "draw";
	}


}




 $(document).ready(function(){
   $(".activeblock").one('click',function(eventstarted){
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


    

	  var result = gameDecision();

		if(result != "resume"){
			if(result != "draw"){

				alert(result+" is the Winner...");


			}else{

				alert("Match Draw");

			}
			setTimeout(function(){location.reload()},2000);

		}

   })
 });
