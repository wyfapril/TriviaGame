$(document).ready(function() {

	$("#start").on("click", start);

	function start() {
		document.getElementById("start").style.display="none";
		document.getElementById("questions").style.display="block";
		var totalTime = 100; 
		var interval = setInterval(countDown, 1000);
		function countDown(){
			totalTime--;
			$("#timer").text("Time Remaining: " + totalTime + " Seconds");
			if (totalTime==0) {
				clearInterval(interval);
				console.log("Time's up!");
				document.getElementById("questions").style.display="none";
				document.getElementById("results").style.display="block";
				function counter () {
					var correct = 0;
					var wrong = 0;
					var	notAnswered = 0;
					if (document.forms[0].quesion1[1].checked){
						correct++;
						console.log("correct"+correct);
						$("#correct").text("Correct: " + correct);
					}
				}
			}
		}		
	}





});