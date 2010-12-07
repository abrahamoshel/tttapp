// wait for document to load
$(document).ready(function(){
	$("td[id*='cell']").addClass("unplayed");
	
	// Computer Playing with some built in Logic
	function computersTurn() {
	
		//Computer always moves first and always moves to the top left tile
		if($("#cell11").hasClass("unplayed")){
			$("#cell11").html("<p class='button'>D</p>").removeClass("unplayed").addClass('computer');
		
		// Computer take winning move if it has the oppurtunity
		}else if($("td[id^='cell1'].computer").length == 2 & $("#cell12").hasClass("unplayed")){
			$("#cell12").html("<p class='button'>D</p>").removeClass("unplayed").addClass('computer');	
			
			
		
		// check to see if in Column 2 there is 2 human moves and need to be blocked
		}else if($("td[id$='2'].human").length == 2 & $("#cell32").hasClass("unplayed")){
			$("#cell32").html("<p class='button'>D</p>").removeClass("unplayed").addClass('computer');
			
			
		}else if($("td[id$='2'].human").length == 2 & $("#cell12").hasClass("unplayed")){
			$("#cell12").html("<p class='button'>D</p>").removeClass("unplayed").addClass('computer');
			
		
		// check to see if in Column 3 there is 2 human moves and need to be blocked
		}else if($("td[id$='3'].human").length == 2 & $("#cell33").hasClass("unplayed")){
			$("#cell33").html("<p class='button'>D</p>").removeClass("unplayed").addClass('computer');
		
		
		}else if($("td[id$='3'].human").length == 2 & $("#cell23").hasClass("unplayed")){
			$("#cell23").html("<p class='button'>D</p>").removeClass("unplayed").addClass('computer');
			
				
		// check to see if in Row 2 there is 2 human moves and need to be blocked
		}else if($("td[id^='cell2'].human").length == 2 & $("#cell23").hasClass("unplayed")){
			$("#cell23").html("<p class='button'>D</p>").removeClass("unplayed").addClass('computer');
			
			
		}else if($("td[id^='cell2'].human").length == 2 & $("#cell21").hasClass("unplayed")){
			$("#cell21").html("<p class='button'>D</p>").removeClass("unplayed").addClass('computer');
			
		
		// check to see if in Row 3 there is 2 human moves and need to be blocked	
		}else if($("td[id^='cell3'].human").length == 2 & $("#cell31").hasClass("unplayed")){
			$("#cell31").html("<p class='button'>D</p>").removeClass("unplayed").addClass('computer');
			
			
		}else if($("td[id^='cell3'].human").length == 2 & $("#cell32").hasClass("unplayed")){
			$("#cell32").html("<p class='button'>D</p>").removeClass("unplayed").addClass('computer');
			
			
		}else if($("td[id^='cell3'].human").length == 2 & $("#cell33").hasClass("unplayed")){
			$("#cell33").html("<p class='button'>D</p>").removeClass("unplayed").addClass('computer');
			
			
		}else if($("#cell13").hasClass("unplayed")){
			$("#cell13").html("<p class='button'>D</p>").removeClass("unplayed").addClass('computer');
			
			
		}else if($("#cell22").hasClass("unplayed")){
			$("#cell22").html("<p class='button'>D</p>").removeClass("unplayed").addClass('computer');
			
			
		}else if($("#cell31").hasClass("unplayed")){
			$("#cell31").html("<p class='button'>D</p>").removeClass("unplayed").addClass('computer');
			
			
		}else if($("#cell33").hasClass("unplayed")){
			$("#cell33").html("<p class='button'>D</p>").removeClass("unplayed").addClass('computer');
			
			
		}else if($("#cell12").hasClass("unplayed")){
			$("#cell12").html("<p class='button'>D</p>").removeClass("unplayed").addClass('computer');
			
			
		}else if($("#cell23").hasClass("unplayed")){
			$("#cell23").html("<p class='button'>D</p>").removeClass("unplayed").addClass('computer');
			
			
		}
		else{
			$("#cell32").html("<p class='button'>D</p>").removeClass("unplayed").addClass('computer');
			
		}
		
		
		win()
		turn = 0;
		
	}
	
	// making 1 be the first move which is the computer
	var turn = 1;
	computersTurn()

	// .one make it so you can't toggle the 0's and X's back and forth
	$("td[id*='cell']").one("click",
							
		function(){
			var cell = $(this);
			// check to see who's turn it is and toggling between X's and O's
			// THIS IS THE HUMANS TURN
			if(turn==0){
				
				cell.html("<p>V</p>").addClass('human');
				// Removing class so that the computer knows not to play on already played tile
				$(this).removeClass("unplayed");
				//see if anyone has won yet
				win()
				
				//switch to X's turn
				turn = 1;
				computersTurn()
			}
			/* ------------------------------ Orginally coded so that 2 players could play without computer. No longer needed
			because AI is in place
			else{
				
				cell.html("<p class='button'>D</p>").addClass('computer');
				// Removing class so that the computer knows not to play on already played tile
				$(this).removeClass("unplayed");
				//see if anyone has won yet
				win()
				
				// swith to O's turn
				turn = 0;
			}*/
		}
		
	)
	// make table cells non-selectable unless you really try to
	$("table, tr, td").selectable({ disabled: true });
	
	//CHECKING TO SEE IF ANYONE WON
	function win(){
		// getting the text that is in each of the td when a play is made
		var win1 = $("td[id^='cell1']").text();
		var win2 = $("td[id^='cell2']").text();
		var win3 = $("td[id^='cell3']").text();
		var win4 = $("td[id$='3']").text();
		var win5 = $("td[id$='2']").text();
		var win6 = $("td[id$='1']").text();
		var win7 = $("#cell13, #cell22, #cell31").text();
		var win8 = $("#cell11, #cell22, #cell33").text();

		//checking to see if the content of each matching td makes a win a win
		if(win1 == "DDD" || win2 == "DDD" || win3 == "DDD" || win4 == "DDD" || win5 == "DDD" || win6 == "DDD" || win7 == "DDD" || win8 == "DDD"){
			alert("Computer Wins");
			// IF there is a win than the game play stops and you can't click on another tile
			$.unbind("click")
			$.unbind("mouseover")
			$.unbind("mouseout");
			
		}else if(win1 == "VVV" || win2 == "VVV" || win3 == "VVV" || win4 == "VVV" || win5 == "VVV" || win6 == "VVV" || win7 == "VVV" || win8 == "VVV"){
			alert("Human Wins")
			// IF there is a win than the game play stops and you can't click on another tile
			$.unbind("click")
			$.unbind("mouseover")
			$.unbind("mouseout");
		}else{
			
		}
	}
});