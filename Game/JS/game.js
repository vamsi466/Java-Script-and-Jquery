

//function to decide the game winner or is it a draw match
 function gameDecision(){

  //considering all the blocks on the game board
	var blocks = $(".activeblock");

  //array in which each game block with text appende is injected
	var textinblocks = [];

  //a loop for having the blocks with text into it after having a click on the block
  var blocklength = blocks.length;
	for(var i = 0; i<blocklength;i++){
		textinblocks.push($(blocks[i]).text());
	}


  //having a condition to declare which player is winner or a draw match
  //checking the condition whether we are having 3 continuos blocks of player1 which is with text "X"
  //if any player have 3 blocks of his/her text appended horizontally / vertically/ diagonally continuosally he is the winner
  //player1 winning condition

	if((textinblocks[0] == "X" && textinblocks[1] == "X" &&  textinblocks[2] == "X") ||
  (textinblocks[3] == "X" && textinblocks[4] == "X" &&  textinblocks[5] == "X") ||
  (textinblocks[6] == "X" && textinblocks[7] == "X" &&  textinblocks[8] == "X") ||
  (textinblocks[0] == "X" && textinblocks[3] == "X" &&  textinblocks[6] == "X") ||
  (textinblocks[1] == "X" && textinblocks[4] == "X" &&  textinblocks[7] == "X") ||
  (textinblocks[2] == "X" && textinblocks[5] == "X" &&  textinblocks[8] == "X") ||
  (textinblocks[0] == "X" && textinblocks[4] == "X" &&  textinblocks[8] == "X") ||
  (textinblocks[2] == "X" && textinblocks[4] == "X" &&  textinblocks[6]   == "X" )){
		return "PlayerOne";

	}

  //player2 winning condition

	else if((textinblocks[0] == "O" && textinblocks[1] == "O" &&  textinblocks[2] == "O") ||
  (textinblocks[3] == "O" && textinblocks[4] == "O" &&  textinblocks[5] == "O") ||
  (textinblocks[6] == "O" && textinblocks[7] == "O" &&  textinblocks[8] == "O") ||
  (textinblocks[0] == "O" && textinblocks[3] == "O" &&  textinblocks[6] == "O") ||
  (textinblocks[1] == "O" && textinblocks[4] == "O" &&  textinblocks[7] == "O") ||
  (textinblocks[2] == "O" && textinblocks[5] == "O" &&  textinblocks[8] == "O") ||
  (textinblocks[0] == "O" && textinblocks[4] == "O" &&  textinblocks[8] == "O") ||
  (textinblocks[2] == "O" && textinblocks[4] == "O" &&  textinblocks[6] == "O")){

		return "PlayerTwo"

	}

  //if none of the blocks are remained empty and no player won the match then it declare as draw
  //if any block remianed untouched/clicked then the game is still continued

	if((textinblocks.indexOf("clickme")) != -1){

		return "resume";

	}else{

		return "draw";
	}


}



//the functionality is ready
 $(document).ready(function(){

   //when a block is clicked then its event is taken and based on that change that with respect to player which player is active
   //.one is used so that no block can,t be clicked more thqn once
   $(".activeblock").one('click',function(eventstarted){

     //.target gives which block is current target
     var activatedBlock = eventstarted.target;


     //to see which player is active either player1 or 2
     var firstPlayer = $(".player1").hasClass("activeplayer");
     var secondPlayer = $(".player2").hasClass("activeplayer");


     //if first player is active then the respective changes are made to that block
     if(firstPlayer && !secondPlayer){


       //we are activating second player and deactivating first player after first player click
       $(".player1").removeClass("activeplayer");
       $(".player2").addClass("activeplayer");

       //changing the color or the block with respect first player color
       $(activatedBlock).css("background-color","lightblue");

       //appending the text to that div/block with the letter "X"
       $(activatedBlock).text("X");

     }

     //if second player is active then the respective changes are made to that block
     if(!firstPlayer && secondPlayer){

       //we are activating first player and deactivating second player after second player click
       $(".player1").addClass("activeplayer");
       $(".player2").removeClass("activeplayer");

       //changing the color or the block with respect second player color
       $(activatedBlock).css("background-color","blue");

        //appending the text to that div/block with the letter "O"
       $(activatedBlock).text("O");

     }//this will be continued until all the blocks are targeted once



    // calling a function to decide who is the winner of the game
	  var result = gameDecision();

    //declaring the winner based on the output of function
		if(result != "resume"){
			if(result != "draw"){

        //throwing an alert about the winner
				alert(result+" is the Winner...");


			}else{

        //if none of them win then declaring the match as DRAW
				alert("Match Draw");

			}

      //reloading the game after the game is completed with a setTimeout of 2 seconds
			setTimeout(function(){location.reload()},2000);

		}

   })
 });
