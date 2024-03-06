let formOpen = false; // Add this line to declare the formOpen variable

function showForm(button) {
    if (formOpen) return; // exit if form is already open

    formOpen = true;

    const trainer = button.closest('.trainer');
    const form = document.createElement('div');
    form.classList.add('application-form', 'your-custom-class');
    form.style.backgroundColor = 'lightgray';
    form.innerHTML = `
      <h3>Apply to train</h3>
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