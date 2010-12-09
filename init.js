// small jquery plugin so that I don't have to write out this line everytime, and the code is cleaner
$.fn.extend({
	computerPlay: function (){
		$(this).html("<p class='button'>D</p>").removeClass("unplayed").addClass('computer');
	}
});

// Condensing code so I don't have to repeat myself for each alert
$.fn.extend({
	dialogmessage: function(message) {
		$(this).dialog({
            title: message,
            resizable: false,
            width: 400,
            modal: true,
            buttons: {
                "Play Again": function() {
                    $( this ).dialog(location.reload());
                },
                "I'm done": function() {
                    $( this ).dialog( "close" );
                }
            }
        });
	}
});

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
		$( "#alert" ).dialogmessage('Computer Wins, your labor is futile!').stop();
		
	}else if(win1 == "VVV" || win2 == "VVV" || win3 == "VVV" || win4 == "VVV" || win5 == "VVV" || win6 == "VVV" || win7 == "VVV" || win8 == "VVV"){
		$( "#alert" ).dialogmessage('Human Wins, thats not suppose to happen').stop();
		
	}else if ($("td[id*='cell'].unplayed").length == 0){
		$( "#alert" ).dialogmessage('Draw, no one wins').stop();
		
	}else{
	
	}
}
// LOGIC FOR COMPUTERS PLAYING
function computersTurn() {
	var turn = 1;
	
	// COMPUTER ALWAYS MOVES FIRST TO THE MIDDLE SQUARE IF OPEN
	if($("#cell22").hasClass("unplayed")){
		$("#cell22").computerPlay();	
	
	// COMPUTER ALWAYS TAKES WINNING MOVE DIAGONALLY
	}else if($("#cell13").hasClass("computer") & $("#cell22").hasClass("computer") & $("#cell31").hasClass("unplayed")){
		$("#cell31").computerPlay();	

	
	}else if($("#cell31").hasClass("computer") & $("#cell22").hasClass("computer") & $("#cell13").hasClass("unplayed")){
		$("#cell13").computerPlay();	

	
	}else if($("#cell11").hasClass("computer") & $("#cell22").hasClass("computer") & $("#cell33").hasClass("unplayed")){
		$("#cell33").computerPlay();	
	
	// COMPUTER TAKES WINNING MOVE IN COLUMN 1
	}else if($("td[id$='1'].computer").length == 2 & $("#cell31").hasClass("unplayed")){
		$("#cell31").computerPlay();	
		
	}else if($("td[id$='1'].computer").length == 2 & $("#cell21").hasClass("unplayed")){
		$("#cell21").computerPlay();	

	// COMPUTER TAKES WINNING MOVE IN ROW 1
	}else if($("td[id^='cell1'].computer").length == 2 & $("#cell13").hasClass("unplayed")){
			$("#cell13").computerPlay();

	// COMPUTER TAKES WINNING MOVE COLUMN 2
	}else if($("td[id$='2'].computer").length == 2 & $("#cell12").hasClass("unplayed")){
			$("#cell12").computerPlay();
	
	}else if($("td[id$='2'].computer").length == 2 & $("#cell32").hasClass("unplayed")){
			$("#cell32").computerPlay();

	// COMPUTER TAKES WINNING MOVE IN ROW 2
	}else if($("td[id^='cell2'].computer").length == 2 & $("#cell21").hasClass("unplayed")){
			$("#cell21").computerPlay();
	
	}else if($("td[id^='cell2'].computer").length == 2 & $("#cell23").hasClass("unplayed")){
			$("#cell23").computerPlay();
		
	// COMPUTER TAKES WINNING MOVE IN COLUMN 3
	}else if($("td[id$='3'].computer").length == 2 & $("#cell13").hasClass("unplayed")){
		$("#cell13").computerPlay();	
		
	}else if($("td[id$='3'].computer").length == 2 & $("#cell33").hasClass("unplayed")){
		$("#cell33").computerPlay();	
	
	// COMPUTER TAKE WINNING MOVIE IN ROW 3
	}else if($("td[id^='cell3'].computer").length == 2 & $("#cell31").hasClass("unplayed")){
			$("#cell31").computerPlay();
	
	// SENERIO WHERE COMPUTER HAS TO MAKE AGRESSIVE MOVE TO NOT LOSE
	}else if($("#cell11").hasClass("human") & $("#cell33").hasClass("human") & $("#cell23").hasClass("unplayed")){
		$("#cell23").computerPlay();	
		
	}else if($("#cell13").hasClass("human") & $("#cell31").hasClass("human") & $("#cell23").hasClass("unplayed")){
			$("#cell23").computerPlay();	
			
					
	// CHECK TO SEE IF IN COLUMN 1 THERE IS 2 HUMAN MOVES AND NEEDS TO BLOCK
	}else if($("td[id$='1'].human").length == 2 & $("#cell11").hasClass("unplayed")){
		$("#cell11").computerPlay();	

	}else if($("td[id$='1'].human").length == 2 & $("#cell21").hasClass("unplayed")){
		$("#cell21").computerPlay();	

	}else if($("td[id$='1'].human").length == 2 & $("#cell31").hasClass("unplayed")){
		$("#cell31").computerPlay();
		
	// CHECK TO SEE IF IN COLUMN 2 THERE IS 2 HUMAN MOVES AND NEEDS TO BLOCK
	}else if($("td[id$='2'].human").length == 2 & $("#cell32").hasClass("unplayed")){
		$("#cell32").computerPlay();
		
		
	}else if($("td[id$='2'].human").length == 2 & $("#cell12").hasClass("unplayed")){
		$("#cell12").computerPlay();
		
	
	// CHECK TO SEE IF IN COLUMN 3 THERE IS 2 HUMAN MOVES AND NEEDS TO BLOCK
	}else if($("td[id$='3'].human").length == 2 & $("#cell13").hasClass("unplayed")){
		$("#cell13").computerPlay();
	
	
	}else if($("td[id$='3'].human").length == 2 & $("#cell23").hasClass("unplayed")){
		$("#cell23").computerPlay();
	
	
	}else if($("td[id$='3'].human").length == 2 & $("#cell33").hasClass("unplayed")){
		$("#cell33").computerPlay();
		
	// CHECK TO SEE IF IN ROW 1 THERE IS 2 HUMAN MOVES AND NEEDS TO BLOCK
	}else if($("td[id^='cell1'].human").length == 2 & $("#cell12").hasClass("unplayed")){
		$("#cell12").computerPlay();
		
	
	}else if($("td[id^='cell1'].human").length == 2 & $("#cell13").hasClass("unplayed")){
		$("#cell13").computerPlay();
			
	// CHECK TO SEE IF IN ROW 2 THERE IS 2 HUMAN MOVES AND NEEDS TO BLOCK
	}else if($("td[id^='cell2'].human").length == 2 & $("#cell21").hasClass("unplayed")){
		$("#cell21").computerPlay();
		
		
	}else if($("td[id^='cell2'].human").length == 2 & $("#cell23").hasClass("unplayed")){
		$("#cell23").computerPlay();
		
	
	// CHECK TO SEE IF IN ROW 3 THERE IS 2 HUMAN MOVES AND NEEDS TO BLOCK	
	}else if($("td[id^='cell3'].human").length == 2 & $("#cell31").hasClass("unplayed")){
		$("#cell31").computerPlay();
		
		
	}else if($("td[id^='cell3'].human").length == 2 & $("#cell32").hasClass("unplayed")){
		$("#cell32").computerPlay();
		
		
	}else if($("td[id^='cell3'].human").length == 2 & $("#cell33").hasClass("unplayed")){
		$("#cell33").computerPlay();
	
	// CHECK TO SEE IF THERE IS 2 HUMAN MOVES ON THE DIAGONAL THAT NEEDS TO BLOCK
	}else if($("#cell31").hasClass("human") & $("#cell22").hasClass("human") & $("#cell13").hasClass("unplayed")){
		$("#cell13").computerPlay();
	
	}else if($("#cell13").hasClass("human") & $("#cell22").hasClass("human") & $("#cell31").hasClass("unplayed")){
		$("#cell31").computerPlay();
		
		
	// OTHER DEFAULT MOVES IF NO BLOCKING MOVE OR WINNING MOVE	
	}else if($("#cell11").hasClass("unplayed")){
		$("#cell11").computerPlay();
		
		
	}else if($("#cell33").hasClass("unplayed")){
		$("#cell33").computerPlay();
		
		
	}else if($("#cell31").hasClass("unplayed")){
		$("#cell31").computerPlay();
		
		
	}else if($("#cell13").hasClass("unplayed")){
		$("#cell13").computerPlay();
		
		
	}else if($("#cell23").hasClass("unplayed")){
		$("#cell23").computerPlay();
		
	// COMPUTER WILL PLAY ANY OPEN SQUARE IF THERE IS GOING TO BE A DRAW	
	}else{
		$("td[id*='cell'].unplayed").computerPlay();
		
	}
	
	
	win()
	var turn = 0;
	
}