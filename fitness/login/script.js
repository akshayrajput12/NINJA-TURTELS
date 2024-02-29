let profile = document.getElementById('profile-img');

function showSubmenu() {
  var submenu = document.getElementById('submenu');
  submenu.style.visibility = 'visible';
  submenu.style.transition = '20s';
}

function hideSubmenu() {
  var submenu = document.getElementById('submenu');
  submenu.style.visibility = 'hidden';
  submenu.style.transition = '20s';
}

profile.addEventListener('mouseover', showSubmenu);
profile.addEventListener('mouseout', hideSubmenu);

function resetLoginForm() {
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
}

function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Simple validation (you may want to implement more robust validation)
  if (username == 'akshayrajput2616@gmail.com' && password =='Cbum@1234') {
    alert('Login successful!');
    window.location.href = '/fitness/home/home.html';
    // Redirect to another page or perform additional actions on successful login
  } else {
    alert('Invalid username or password. Please try again.');
    resetLoginForm();
  }
}