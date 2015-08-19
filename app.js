$(document).ready(function() {

	var correct_count = 0;
	var index_num = 0;

    var array_of_objects = [{
        question: "How to properly clean the dishes?",
        answers: ["let food dry on dishes\, then place in dish washer",
        	"use dish soap\, sponge\, and water",
        	"cast a spell on the dirty dishes to become clean"],
        correct_answer: "answer1"
        },
        {
        question: "What type of soap is used to wash clothes?",
        answers: ["hair shampoo",
        	"pixie dust",
        	"clothes detergent"],
        correct_answer: "answer3"
        },
        {
        question: "How to get the dust off of the furniture?",
        answers: ["a feather duster",
        	"toothbrush",
        	"a waive of your hand while chanting oohhmmmm"],
        correct_answer: "answer1"
    	},
    	{
        question: "How to make the bed?",
        answers: ["Cross fingers and hope for the best", "throw the blankets onto the floor", "place blanket neatly onto bed"],
        correct_answer: "answer3"
    	},
    	{
        question: "How to vacuum the carpet?",
        answers: ["wish upon a star", "use vacuum cleaner and follow its directions", "throw dirt onto the floor and leave it there"],
        correct_answer: "answer2"
    }]

    function itemPopulate(index) {
    	$("p:first").replaceWith('<p id="title_format">'+array_of_objects[index].question+'</p>');
		$("li:eq(0)").replaceWith('<li><input type="radio" name="input_answer" id="first" value="0"/>'+array_of_objects[index].answers[0]+'</li>');
		$("li:eq(1)").replaceWith('<li><input type="radio" name="input_answer" id="second" value="1"/>'+array_of_objects[index].answers[1]+'</li>');
		$("li:eq(2)").replaceWith('<li><input type="radio" name="input_answer" id="third" value="2"/>'+array_of_objects[index].answers[2]+'</li>');
	}

	itemPopulate(0);

	$("button").click(function(){
		index_num++;
		if (index_num == 5) {
			$("ul").remove();
			$("p:first").remove();
			$("button:first").replaceWith('<p id="score_format">Congratulations!  Your score is: </p>');
		}
		alert(index_num);
		itemPopulate(index_num);
    });
});