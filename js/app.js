$(document).ready(function () {

    /******Var questions for quiz******/

    var questions = [

        // Question 1
        {
            question: 'What was the highest grossing movie of the 1990’s?',
            choices: ['Titanic', 'Jurrasic Park', 'Forrest Gump', 'Star Wars Episode I'],
            correct: 0,
            correctDetails: 'Titanic'
        },

        // Question 2    
        {
            question: 'Who sang the “Friends” theme song?',
            choices: ['Gin Blossoms', 'The Replacments', 'The Rembrandts', 'Toad The Wet Sprocket'],
            correct: 2,
            correctDetails: 'The Rembrandts'
        },

        // Question 3
        {
            question: 'What was the name of the fictional band in the move “Singles”?',
            choices: ['Citizen Flannel', 'Pearl Jam', 'The Posies', 'Citizen Dick'],
            correct: 3,
            correctDetails: 'Citizen Dick'
        },

        // Question 4
        {
            question: 'What was the name of the dog on the TV show “Frasier”?',
            choices: ['Spot', 'Eddie', 'Fido', 'Charlie'],
            correct: 1,
            correctDetails: 'Eddie'
        },

        // Question 5
        {
            question: 'In 1996, Dolly the sheep became the most famous sheep in the world for what reason?',
            choices: ['She was the first cloned mammal.', 'She looked like a human.', 'She had eight legs.', 'She was the first animal to go to the International Space Station.'],
            correct: 0,
            correctDetails: 'She was the first cloned mammal.'
        },

        // Question 6
        {
            question: 'Which 90s song was called the #1 Greatest One-Hit Wonder of all time by VH1?',
            choices: ['"Macarena" by Los del Rio', '"I Touch Myself" by the Divinyls', '"I Wish" by Skee-Lo', '"Peaches" by The Presidents of the United States of America'],
            correct: 0,
            correctDetails: '"Macarena" by Los del Rio'
        },

        // Question 7
        {
            question: 'President Bill Clinton famously played the saxophone on what late-night talk-show hosts program?',
            choices: ['Jimmy Kimmel', 'Jay Leno', 'Arsenio Hall', 'David Letterman'],
            correct: 2,
            correctDetails: 'Arsenio Hall'
        },

        // Question 8
        {
            question: 'Which of the following band/artists had the top selling album in 1995?',
            choices: ['Celine Dion', 'Hootie and The Blowfish', 'Metallica', 'Backstreet Boys '],
            correct: 1,
            correctDetails: 'Hootie and The Blowfish'
        },

        // Question 9
        {
            question: 'Of the following, which was NOT the name of a Spice Girl?',
            choices: ['Baby', 'Sporty', 'Scary', 'Cutie'],
            correct: 3,
            correctDetails: 'Cutie'
        },

        // Question 10
        {
            question: 'What film won the Academy Award for Best Picture in 1992?',
            choices: ['Beauty and The Beast', 'The Silence Of The Lambs', 'JFK', 'Bugsy'],
            correct: 1,
            correctDetails: 'The Silence of the Lambs'
        },
    ];

    /******Global Variables******/

    var questionNum = 0;
    var questionTotal = 10;
    var correctTotal = 0;

    /******At Quiz Load, Hide quiz and result sections******/

    $('.quizSection').hide();
    $('.quizResults').hide();
    $('.answerPicsLeft').hide();
    $('.answerPics').hide();

    /******At Quiz Section, allow user to click on answer and validate******/

    $('.quizSection').on('click', '.option', function () {
        var answer = $("input[type='radio']:checked").val();
        var correctAnswer = questions[questionNum].correct;
        if (answer == correctAnswer) {

            //if correct answer was selected    
            correctTotal++;
            console.log(correctTotal);
        }

        /******At quiz end show correct Q&A to user******/

        $('.finalScore').append("<p>Question " + questions[questionNum].question + "<br />" + "</p>");
        $('.finalScore').append("<p>Answer:" + questions[questionNum].correctDetails + "</p>");

        /******At Quiz Finish, show score and pictures******/

        if ((questionNum + 1) == questionTotal) {
            $('.quizResults').show();
            $('.quizScore').text(correctTotal + "/" + questionTotal);
            $('.startButton').show();
            $('.answerPics').show();
            //hide other "screens"
            $('.quizSection').hide();
            $('.quizStart').hide();

        } else {
            //continue to next question
            questionNum++;
            questionDisplay();
        }
    });

    /******When finished allow user to replay******/

    $('.quizResults').on('click', '.startButton', function () {
        $('.quizSection').hide();
        $('.answerPics').hide();
        $('.quizResults').hide();
        $('.quizStart').show();
        //reset variables to start quiz again
        questionNum = 0;
        correctTotal = 0;
    });

    /******Display Questions******/

    function questionDisplay() {
        $('.questionNumber').text("Question " + (questionNum + 1) + " of " + questionTotal);
        $('#questionText').text(questions[questionNum].question);
        $('#answers').empty();
        var choiceTotal = questions[questionNum].choices.length;
        for (var i = 0; i < choiceTotal; i++) {
            //Display Choices
            $('#answers').append("<input type='radio' class='option' name='option' value=" + i + ">" + " " + questions[questionNum].choices[i] + "<br>");
            $('.answerPics').hide();
        }
    }

    /******At start of game activate "Let's Play" Button******/

    $('#startQuizButton').click(function () { //start the quiz and show the first question
        $('.quizResults').hide();
        $('.answerPics').hide();
        $('.quizStart').hide();
        $('.quizSection').show();
        questionDisplay();
    });


});