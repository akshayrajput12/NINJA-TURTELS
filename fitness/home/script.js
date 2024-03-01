let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}


function toggleChatbot() {
    const chatbot = document.getElementById("chatbot");
    if (chatbot.style.display === "none" || chatbot.style.display === "") {
      chatbot.style.display = "block";
    } else {
      chatbot.style.display = "none";
    }
  }

  function closeChatbot() {
    const chatbot = document.getElementById("chatbot");
    chatbot.style.display = "none";
  }

  const fitnessChatbot = {
    questions: [
      {
        question: "What is a good exercise for abs?",
        answer: "The plank is a great exercise for abs. To perform a plank, get into a push-up position, bend your elbows, and rest your weight on your forearms. Ensure your body forms a straight line from your head to your feet. Hold this position for as long as you can."
      },
      {
        question: "How can I lose weight fast?",
        answer: "Losing weight quickly is not always healthy or sustainable. Instead, focus on a balanced diet and regular exercise. Try to create a calorie deficit by consuming fewer calories than you burn. Aim for a healthy and steady weight loss of 1-2 pounds per week."
      },
      {
        question: "What are the benefits of yoga?",
        answer: "Yoga has numerous benefits, such as improving flexibility, strength, and balance. It also reduces stress, increases mental clarity, and helps with relaxation. Yoga can even improve your posture and alleviate chronic pain."
      }
    ],

    ask: function (question) {
      for (const qa of this.questions) {
        if (question.toLowerCase().includes(qa.question.toLowerCase())) {
          return qa.answer;
        }
      }
      return "I'm sorry, I don't have an answer for that question.";
    }
  };

  function getAnswer() {
    const userQuestion = document.getElementById("questionInput").value;
    document.getElementById("answer").innerText = fitnessChatbot.ask(userQuestion);
  }

// Get all the get started buttons
const getStartedBtns = document.querySelectorAll('.start button');

// Add event listener to each get started button
getStartedBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        // Find the corresponding user info div and toggle its display
        const userInfoDiv = btn.closest('.start').nextElementSibling;
        userInfoDiv.style.display = userInfoDiv.style.display === 'block' ? 'none' : 'block';
    });
});

// Get all the close buttons
const closeBtns = document.querySelectorAll('#userInfo .img');

// Add event listener to each close button
closeBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        // Find the corresponding user info div and hide it
        const userInfoDiv = btn.closest('.user-info');
        userInfoDiv.style.display = 'none';
    });
});

// Get all the checkbox buttons
const checkboxButtons = document.querySelectorAll('.checkbox-button');

// Add event listener to each checkbox button
checkboxButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Toggle the checked class on the corresponding label
        const label = document.querySelector(`label[for="${button.id}"]`);
        label.classList.toggle('checkbox-button-checked');
    });
});
