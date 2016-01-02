$(document).ready(function () {

    //Var questions for quiz
    var questions = [
        // Question 1
        {
            question: 'What was the highest grossing movie of the 1990’s?',
            choices: ['Titanic', 'Jurrasic Park', 'Forrest Gump', 'Star Wars Episode I'],
            correct: 1,
            correctDetails: 'Far and away the biggest film success of the 90s was Titanic. It made $1,843,201,268).',
        },
        // Question 2    
        {
            question: 'Who sang the “Friends” theme song?',
            choices: ['Gin Blossoms', 'The Replacments', 'The Rembrandts', 'Toad The Wet Sprocket'],
            correct: 3,
            correctDetails: 'The Rembrandts sang the "Friends" theme song. The song topped the charts for 8 weeks in 1995.'
        },
        // Question 3
        {
            question: 'What was the name of the fictional band in the move “Singles”?',
            choices: ['Citizen Flannel', 'Pearl Jam', 'The Posies', 'Citizen Dick'],
            correct: 4,
            correctDetails: 'The bands name was Citizen Dick and included members of Pearl Jam.'
        },
        // Question 4
        {
            question: 'What was the name of the dog on the TV show “Frasier”?',
            choices: ['Spot', 'Eddie', 'Fido', 'Charlie'],
            correct: 2,
            correctDetails: 'Eddie, a Jack Russel Terrier, was the dog on "Frasier". His real name was Moose.'
        },
        // Question 5
        {
            question: 'In July 1996, Dolly the sheep became the most famous sheep in the world for what reason?',
            choices: ['She was the first cloned mammal.', 'She looked like a human.', 'She had eight legs.', 'She was the first animal to go to the International Space Station.'],
            correct: 1,
            correctDetails: 'Dolly was a female domestic sheep, and the first mammal to be cloned from an adult somatic cell, using the process of nuclear transfer.'
        },
        // Question 6
        {
            question: 'Which 90s song was called the #1 Greatest One-Hit Wonder of all time by VH1?',
            choices: ['"Macarena" by Los del Rio', '"I Touch Myself" by the Divinyls', '"I Wish" by Skee-Lo', '"Peaches" by The Presidents of the United States of America'],
            correct: 1,
            correctDetails: 'In 2002, VH1 ranked the "Macarena" as the #1 Greatest One-Hit Wonder of all time.'
        },
        // Question 7
        {
            question: 'President Bill Clinton famously played the saxophone on what late-night talk-show hosts program?',
            choices: ['Jimmy Kimmel', 'Jay Leno', 'Arsenio Hall', 'David Letterman'],
            correct: 3,
            correctDetails: 'In 1992, Bill Clinton played "Hearbreak Hotel" on "The Arsenio Hall" show while campaining for President.'
        },
        // Question 8
        {
            question: 'Which of the following band/artists had the top selling album in 1995?',
            choices: ['Celine Dion', 'Hootie and The Blowfish', 'Metallica', 'Backstreet Boys '],
            correct: 2,
            correctDetails: '"Cracked Rear View" by Hootie and the Blowfish was the most popular album of the year, with 7 million copies sold.'
        },
        // Question 9
        {
            question: 'Of the following, which was NOT the name of a Spice Girl?',
            choices: ['Baby', 'Sporty', 'Scary', 'Cutie'],
            correct: 4,
            correctDetails: 'The Spice Girls names were Scary, Sporty, Posh, Baby, and Ginger. Cutie did not make the cut.'
        },
        // Question 10
        {
            question: 'What film won the Academy Award for Best Picture in 1992?',
            choices: ['Beauty and The Beast', 'The Silence Of The Lambs', 'JFK', 'Bugsy'],
            correct: 2,
            correctDetails: 'The Silence of the Lambs won five awards including Best Picture. The film starred Sir Anthony Hopkins and Jodie Foster.'
        },

    ];


    // Variables
    var questionNum = 0;
    var questionTotal = 10;
    var correctTotal = 0;

    // Hide quiz and results section
    $('.quizSection').hide();
    $('.quizResults').hide();
    $('.progressBox').hide();

    //Quiz Start
    $('#startQuizButton').click(function () {
        $('.quizSection').hide();
        $('.quizResults').hide();
        $('.quizStart').show();
        $('.progressBox').show();
        console.log('.quizStart', '.progressBox');
    });

    // Display Question Box

    // Rotate through questions as user inputs answer

    // Quiz Finished, show results


});