// wait for document to load
$(document).ready(function(){
	$("td[id*='cell']").addClass("unplayed");
	
	
	
	// having computer be the first move
	
	
	var turn = 0;
	// .one make it so you can't toggle the 0's and X's back and forth
	$("td.unplayed").click(
						
		function(){
			var cell = $(this);
			
			// THIS IS THE HUMANS TURN
			if(turn==0 & $(this).hasClass("unplayed")){
				
				// Removing class so that the computer knows not to play on already played tile
				cell.html("<p>V</p>").addClass('human').removeClass("unplayed");
				
				
				//see if anyone has won yet
				win();
				
				//switch to X's turn
				
				computersTurn()
			}
		}
		
	)
	// make table cells non-selectable unless you really try to
	$("table, tr, td").selectable({ disabled: true });
	
});