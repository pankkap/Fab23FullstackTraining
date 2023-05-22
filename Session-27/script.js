let data = JSON.parse( localStorage.getItem("user"))
console.log((data))


// login form submit event listener

document.getElementById('login-form').addEventListener('submit', function (event) {
    // prevent the form from submitting
    event.preventDefault();

    // check if both input fields are filled out
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(!data)
    {
        alert("Register yourself first")
    }

    if (username === '' || password === '') {
        // display error message
        alert('Please fill out all fields');
    } 
    else
    {
            // login the user
   
    // check if username is already registered
    if (data.username === username && data.password === password) {
        // proceed to logout
        window.location.href = "logout.html"
      } else  {
        // display invalid username or password message
        alert('Invalid username or password');
      }

    }
    
 });
 
 
 // register form submit event listener
document.getElementById('register-form').addEventListener('submit', function(event) {
    // prevent the form from submitting
    event.preventDefault();

    // check if all input fields are filled out
    var username = document.getElementById('register-username').value;
    var email = document.getElementById('register-email').value;
    var password = document.getElementById('register-password').value;
    var data = {
        username: username,
        email:email,
        password:password
    }
    if (username === '' || email === '' || password === '') {
        // display error message
        alert('Please fill out all fields');
    } else {
        // display success message and redirect to login page
        alert('User Register Successfully');
        localStorage.setItem('user', JSON.stringify(data))
        window.location.href = 'login.html';
    }
});