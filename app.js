$(document).ready(function() {

	var index_num = 0;
	var count_correct = 0;

    var array_of_objects = [{
        question: "How to properly clean the dishes?",
        answers: ["let food dry on dishes\, then place in dish washer",
        	"use dish soap\, sponge\, and water",
        	"cast a spell on the dirty dishes to become clean"],
        correct_answer: "correct_answer2"
        },
        {
        question: "What type of soap is used to wash clothes?",
        answers: ["hair shampoo",
        	"pixie dust",
        	"clothes detergent"],
        correct_answer: "correct_answer3"
        },
        {
        question: "How to get the dust off of the furniture?",
        answers: ["a feather duster",
        	"toothbrush",
        	"a waive of your hand while chanting oohhmmmm"],
        correct_answer: "correct_answer1"
    	},
    	{
        question: "How to make the bed?",
        answers: ["Cross fingers and hope for the best", "throw the blankets onto the floor", "place blanket neatly onto bed"],
        correct_answer: "correct_answer3"
    	},
    	{
        question: "How to vacuum the carpet?",
        answers: ["wish upon a star", "use vacuum cleaner and follow its directions", "throw dirt onto the floor and leave it there"],
        correct_answer: "correct_answer2"
    }]

    function dishes(index) {
    	$("p:first").replaceWith('<p id="title_format">'+array_of_objects[0].question+'</p>');
		$("li:eq(0)").replaceWith('<li><input type="radio" name="input_answer" id="first" value="incorrect_answer1"/>'+array_of_objects[index].answers[0]+'</li>');
		$("li:eq(1)").replaceWith('<li><input type="radio" name="input_answer" id="second" value="correct_answer2"/>'+array_of_objects[index].answers[1]+'</li>');
		$("li:eq(2)").replaceWith('<li><input type="radio" name="input_answer" id="third" value="incorrect_answer3"/>'+array_of_objects[index].answers[2]+'</li>');
	}

	function clothes(index) {
    	$("p:first").replaceWith('<p id="title_format">'+array_of_objects[1].question+'</p>');
		$("li:eq(0)").replaceWith('<li><input type="radio" name="input_answer" id="first" value="incorrect_answer1"/>'+array_of_objects[index].answers[0]+'</li>');
		$("li:eq(1)").replaceWith('<li><input type="radio" name="input_answer" id="second" value="incorrect_answer2"/>'+array_of_objects[index].answers[1]+'</li>');
		$("li:eq(2)").replaceWith('<li><input type="radio" name="input_answer" id="third" value="correct_answer3"/>'+array_of_objects[index].answers[2]+'</li>');
	}

	function dusting(index) {
    	$("p:first").replaceWith('<p id="title_format">'+array_of_objects[2].question+'</p>');
		$("li:eq(0)").replaceWith('<li><input type="radio" name="input_answer" id="first" value="correct_answer1"/>'+array_of_objects[index].answers[0]+'</li>');
		$("li:eq(1)").replaceWith('<li><input type="radio" name="input_answer" id="second" value="incorrect_answer2"/>'+array_of_objects[index].answers[1]+'</li>');
		$("li:eq(2)").replaceWith('<li><input type="radio" name="input_answer" id="third" value="incorrect_answer3"/>'+array_of_objects[index].answers[2]+'</li>');
	}

	function bed(index) {
    	$("p:first").replaceWith('<p id="title_format">'+array_of_objects[3].question+'</p>');
		$("li:eq(0)").replaceWith('<li><input type="radio" name="input_answer" id="first" value="incorrect_answer1"/>'+array_of_objects[index].answers[0]+'</li>');
		$("li:eq(1)").replaceWith('<li><input type="radio" name="input_answer" id="second" value="incorrect_answer2"/>'+array_of_objects[index].answers[1]+'</li>');
		$("li:eq(2)").replaceWith('<li><input type="radio" name="input_answer" id="third" value="correct_answer3"/>'+array_of_objects[index].answers[2]+'</li>');
	}

	function carpet(index) {
    	$("p:first").replaceWith('<p id="title_format">'+array_of_objects[4].question+'</p>');
		$("li:eq(0)").replaceWith('<li><input type="radio" name="input_answer" id="first" value="incorrect_answer1"/>'+array_of_objects[index].answers[0]+'</li>');
		$("li:eq(1)").replaceWith('<li><input type="radio" name="input_answer" id="second" value="correct_answer2"/>'+array_of_objects[index].answers[1]+'</li>');
		$("li:eq(2)").replaceWith('<li><input type="radio" name="input_answer" id="third" value="incorrect_answer3"/>'+array_of_objects[index].answers[2]+'</li>');
	}

	dishes(0);

	$("button").click(function(){
		index_num++;
		if (index_num == 5) {
			if (array_of_objects[4].correct_answer == $("input[name=input_answer]:checked").val()) {
				count_correct++;
			}
			$("ul").remove();
			$("p:first").remove();
			$("button:first").replaceWith('<p id="score_format">Congratulations!  Your score is: '+count_correct+'/5</p>');
		} else if (index_num == 1) {
			if (array_of_objects[0].correct_answer == $("input[name=input_answer]:checked").val()) {
				count_correct++;
			}
			clothes(1);
		} else if (index_num == 2) {
			if (array_of_objects[1].correct_answer == $("input[name=input_answer]:checked").val()) {
				count_correct++;
			}
			dusting(2);
		} else if (index_num == 3) {
			if (array_of_objects[2].correct_answer == $("input[name=input_answer]:checked").val()) {
				count_correct++;
			}
			bed(3);
		} else if (index_num == 4) {
			if (array_of_objects[3].correct_answer == $("input[name=input_answer]:checked").val()) {
				count_correct++;
			}
			carpet(4);
		}
    });
});