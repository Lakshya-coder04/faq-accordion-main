let currentOpenQuestion = null;

function showHide(questionNumber) {
  const plus = document.getElementById(`plus${questionNumber}`);
  const answer = document.getElementById(`answer${questionNumber}`);

  if (currentOpenQuestion !== null && currentOpenQuestion !== questionNumber) {
    const prevPlus = document.getElementById(`plus${currentOpenQuestion}`);
    const prevAnswer = document.getElementById(`answer${currentOpenQuestion}`);

    prevPlus.setAttribute('src', './assets/images/icon-plus.svg');
    prevPlus.classList = 'plus';
    prevAnswer.style.opacity = '0';
    prevAnswer.style.display = 'none';
  }

  if (plus.classList.contains('plus')) {
    plus.setAttribute('src', './assets/images/icon-minus.svg');
    plus.classList = 'minus';
    answer.style.display = 'block'; // Show the answer
    setTimeout(() => {
      answer.style.opacity = '1'; // Fade in
    }, 10); // Delay to allow display property to take effect before the transition starts
  } else if (plus.classList.contains('minus')) {
    plus.setAttribute('src', './assets/images/icon-plus.svg');
    plus.classList = 'plus';
    answer.style.opacity = '0'; // Fade out
    setTimeout(() => {
      answer.style.display = 'none'; // Hide the answer after fade out
    }, 300); // Set the transition duration (in milliseconds)
  }

  currentOpenQuestion =
    currentOpenQuestion === questionNumber ? null : questionNumber;
}

document
  .getElementById('question1')
  .addEventListener('click', () => showHide(1));
document
  .getElementById('question2')
  .addEventListener('click', () => showHide(2));
document
  .getElementById('question3')
  .addEventListener('click', () => showHide(3));
document
  .getElementById('question4')
  .addEventListener('click', () => showHide(4));
