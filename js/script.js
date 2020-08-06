$(document).ready(function () {
  var questions = [
    {
      "question": "Click on a circle shaped object",
      "answers": [{ image: 'images/1.png', correct: "Correct Answer" },
      { image: 'images/2.png', correct: "Try Again" },
      { image: 'images/3.png', correct: "Try Again" },
      { image: 'images/4.png', correct: "Try Again" }],

    },
    {
      "question": "Click on a rectangle shaped object",
      "answers": [{ image: 'images/3.png', correct: "Try Again" },
      { image: 'images/2.png', correct: "Correct Answer" },
      { image: 'images/1.png', correct: "Try Again" },
      { image: 'images/4.png', correct: "Try Again" }],
    },
    {
      "question": "Click on a triangle shaped object",
      "answers": [{ image: 'images/4.png', correct: "Try Again" },
      { image: 'images/3.png', correct: "Correct Answer" },
      { image: 'images/1.png', correct: "Try Again" },
      { image: 'images/2.png', correct: "Try Again" }],
    },
    {
      "question": "Click on a square shaped object",
      "answers": [{ image: 'images/1.png', correct: "Try Again" },
      { image: 'images/4.png', correct: "Correct Answer" },
      { image: 'images/2.png', correct: "Try Again" },
      { image: 'images/3.png', correct: "Try Again" }],
    },
    {
      "question": "Click on a cloud",
      "answers": [{ image: 'images/5.jpg', correct: "Correct Answer" },
      { image: 'images/7.jpg', correct: "Try Again" },
      { image: 'images/8.jpg', correct: "Try Again" },
      { image: 'images/6.jpg', correct: "Try Again" }],
    },
    {
      "question": "Click on a flower plant",
      "answers": [{ image: 'images/8.jpg', correct: "Try Again" },
      { image: 'images/6.jpg', correct: "Correct Answer" },
      { image: 'images/5.jpg', correct: "Try Again" },
      { image: 'images/7.jpg', correct: "Try Again" }],
    },
    {
      "question": "Click on a tree",
      "answers": [{ image: 'images/7.jpg', correct: "Correct Answer" },
      { image: 'images/5.jpg', correct: "Try Again" },
      { image: 'images/8.jpg', correct: "Try Again" },
      { image: 'images/6.jpg', correct: "Try Again" }],
    },
    {
      "question": "Click on the crow",
      "answers": [{ image: 'images/6.jpg', correct: "Try Again" },
      { image: 'images/8.jpg', correct: "Correct Answer" },
      { image: 'images/5.jpg', correct: "Try Again" },
      { image: 'images/7.jpg', correct: "Try Again" }],
    }];

  var shuffle_question, question_index;
  const start_button = document.getElementById('start');
  const next_button = document.getElementById('next');
  const question_container_element = document.getElementById('question_container');
  const question_element = document.getElementById('question');
  const answer_element = document.getElementById('answer_buttons');
  const correct_answer = document.getElementById('for_correct');
  const wrong_answer = document.getElementById('for_wrong');

  start_button.addEventListener('click', start_game);

  function start_game() {
    start_button.classList.add('hide');
    shuffle_question = questions.sort(() => Math.random() - .5);
    question_index = 0;
    question_container_element.classList.remove('hide');
    next_question();
  }

  function next_question() {
    reset();
    next_button.classList.add('hide');
    show_question(shuffle_question[question_index]);
  }

  function show_question(question) {
    question_element.innerText = question.question;
    question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerHTML = `<img src=${answer.image}>`;
      button.classList.add('btn');

      button.addEventListener('click', function () {
        if (answer.correct == 'Correct Answer') {
          correct_click();
        }
        else {
          wrong_click();
        }
      });
      answer_element.appendChild(button);
    })
  }

  function reset() {
    wrong_answer.classList.add('hide');
    correct_answer.classList.add('hide');
    while (answer_element.firstChild) {
      answer_element.removeChild(answer_element.firstChild);
    }
  }

  function correct_click() {
    correct_answer.classList.remove('hide');
    wrong_answer.classList.add('hide');
    if (shuffle_question.length > question_index + 1) {
      question_index++;
      next_button.classList.remove('hide');
      next_button.addEventListener('click', function () {
        next_question();
      });
    }
    else {
      start_button.innerText = 'Play Again';
      start_button.classList.remove('hide');
      question_container_element.classList.add('hide');
    }

  }

  function wrong_click() {
    wrong_answer.classList.remove('hide');
    show_question();
  }

});