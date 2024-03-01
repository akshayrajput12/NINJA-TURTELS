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
let formOpen = false;

function showForm(button) {
  if (formOpen) return; // exit if form is already open

  formOpen = true;

  const trainer = button.closest('.trainer');
  const form = document.createElement('div');
  form.classList.add('application-form', 'your-custom-class');
  form.style.backgroundColor = 'lightgray';
  form.innerHTML = `
    <h3>Apply to train with ${trainer.querySelector('.tds h3:first-child span').innerText}</h3>
    <form id="applicationForm">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      <label for="experience">Fitness Goals:</label>
      <input type="text" id="experience" name="experience" required>
      <button type="submit">Submit</button>
    </form>
  `;
  const previousImage = trainer.previousElementSibling;
  trainer.parentNode.insertBefore(form, trainer.previousElementSibling);
  trainer.parentNode.insertBefore(previousImage, form.nextSibling);

  const formElement = document.getElementById("applicationForm");
  formElement.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const experience = document.getElementById("experience").value;

    // Perform validation here
    if (!name || !email) {
      alert("Please fill in the name and email fields.");
      return;
    } 

    // If validation passes, submit the form using AJAX or other means
    // ...

    form.innerHTML += `
      <div id="message" style="color: green;">Thank you for your query, we will get back to you as soon as possible.</div>
    `;

    // Close the form when it is submitted
    formOpen = false;
  });

  // Add an event listener to close the form when the user clicks outside of it
  form.addEventListener("click", function (event) {
    if (event.target === form) {
      formOpen = false;
      form.remove();
    }
  });
}

