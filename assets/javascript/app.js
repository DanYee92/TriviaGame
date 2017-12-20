/* Outline
Start Game
Show Questions
Timer Starts
Pick answers
Sumbit or Time runs out
Check Answers
Show Results
*/
// hides end game text & button
$(document).ready(function(){
	$(".endGame").hide();
	$("#submitResult").hide();


var	questions= [
	{question:"Who never wore the Robin costume?",
	answers:["Bucky Barnes", "Jason Todd", "Tim Drake", "Dick Grayson"],
	correctAnswer: "Bucky Barnes"},

	{question:"Which superhero carries an indestructible shield?",
	answers:["Captain Deadpool", "Captain Atom", "Captain Marvel", "Captain America"],
	correctAnswer: "Captain America"},

	{question:"Which superhero gains their power from a ring?",
	answers: ["Scarlet Witch", "Cyborg", "Green Lantern", "Dr. Fate"],
	correctAnswer: "Green Lantern"},

	{question: "What planet is Superman from?",
	answers:["Oa", "Krypton", "Mogo", "Xandar"],
	correctAnswer: "Krypton"},

	{question: "Which villain possessed the Infinity Gauntlet?",
	answers: ["Thanos", "Galactus", "Doomsday", "Darkseid"],
	correctAnswer: "Thanos"}
];

// global variables
var correctAnswers = 0;
var incorrectAnswers =0;
var timer ;

// start object
var startGame = {

	viewQuestions: function() {

		for (var i=0; i < questions.length; i++) {
			var question = $("<div id='q"+ i + "' class='spacing'>");
			question.html(questions[i].question);
			question.attr("questions-id", i);
			$('#question').append(question);

			for (ctr = 0; ctr < questions[i].answers.length; ctr++) {
    		var answers = questions[i].answers[ctr];
    		console.log(answers);
    		$('#question').append('<input type="radio" name="question' + '-' + i + '" value="'+ questions[i].answers[ctr] + '"> '+ questions[i].answers[ctr] );
       		}; //second for
    	};  //first for
	}, //viewquestions


	checkAnswers: function () {
		console.log("checking the answers");
		for (var i=0; i < questions.length; i++) {
			var userAnswers = $("input[name='question-" + i +"']:checked");
			if (userAnswers.val() == questions[i].correctAnswer) {
				correctAnswers++;
			} else {
				incorrectAnswers++;
			}
		}
			startGame.results();
	}, //check answers


	results: function(){
		clearInterval(timer);
		$("#question").hide();
		$("#submitResult").hide();
		$("#startClock").hide();
		$(".timeLeft").hide();
		$(".endGame").show();
		$('#correctGuesses').append(correctAnswers);
	}, // reset



	startTimer: function(){
	  var counter = 60;
	  timer= setInterval(function() {
	    counter--;
	    if (counter >= 0) {
	      span = document.getElementById("count");
	      span.innerHTML = counter;
	    }
	    if (counter === 0) {
	        alert('Time is Up!');
	        startGame.results();
	        clearInterval(timer);

	    }
	  }, 1000);
	}, //start timer

}; //start game


// onlicks
$("#startClock").click(function(){
    startGame.startTimer();
    startGame.viewQuestions();
    $("#startClock").hide();
    $("#submitResult").show();
 });

$("#submitResult").click(function(){
    startGame.checkAnswers();
 });


});	//document ready
