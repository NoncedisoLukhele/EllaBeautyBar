// ella.js

// Function to load a section based on its ID
function loadSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach((section) => {
        section.classList.add('hidden');
    });


    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.remove('hidden');
    }
}

// Function to handle search
function search() {
    const query = document.getElementById('search-input').value.toLowerCase();
    // Add your search logic here
    console.log(`Searching for: ${query}`);
}

// Function to handle dropdown toggle
function toggleServicesDropdown() {
    const dropdown = document.querySelector('nav ul li ul');
    dropdown.classList.toggle('hidden');
}

// Function to handle adding item to cart
function addToCart(productId) {
    // Add your add to cart logic here
    console.log(`Adding product ${productId} to cart`);
}

// Function to handle newsletter form submission
function submitNewsletterForm(event) {
    event.preventDefault();
    const email = document.getElementById('newsletterEmail').value;
    // Add your newsletter subscription logic here
    console.log(`Subscribing with email: ${email}`);
}

// Function to handle signup form submission
function submitSignupForm(event) {
    event.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (!username || !email || !password) {
        alert('Please fill out all fields');
        return;
    }


    console.log(`Signing up with username: ${username}, email: ${email}, password: ${password}`);
    alert('Signup successful!');
}

// Function to handle login form submission
function submitLoginForm(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
        alert('Please fill out all fields');
        return;
    }


    console.log(`Logging in with email: ${email}, password: ${password}`);
    alert('Login successful!');
}

// Add event listeners for the forms
document.getElementById('signupForm').addEventListener('submit', submitSignupForm);
document.getElementById('loginForm').addEventListener('submit', submitLoginForm);

// Function to handle showing signup and login forms
function showSignupForm() {
    loadSection('signup-section');
}

function showLoginForm() {
    loadSection('login-section');
}

// Add event listeners for the login and signup links in the dropdown menu
document.getElementById('signup-link').addEventListener('click', showSignupForm);
document.getElementById('login-link').addEventListener('click', showLoginForm);

 // Function to handle booking form submission
 function submitBookingForm(event) {
     event.preventDefault(); // Prevent the default form submission

     // Get form data
     const name = document.getElementById('name').value;
     const email = document.getElementById('email').value;
     const service = document.getElementById('service').value;
     const date = document.getElementById('date').value;
     const time = document.getElementById('time').value;

     // Validate form fields
     if (!name || !email || !service || !date || !time) {
         alert('Please fill out all fields');
         return;
     }

     // Create FormData object from the form
     const formData = new FormData();
     formData.append('name', name);
     formData.append('email', email);
     formData.append('service', service);
     formData.append('date', date);
     formData.append('time', time);
     formData.append('book', 'book'); // This matches the isset($_POST['book']) check in PHP

     // Send form data to booking.php using fetch API
     fetch('booking.php', {
         method: 'POST',
         body: formData
     })
     .then(response => response.text())
     .then(data => {
         // Display response from booking.php
         document.getElementById('formMessage').innerHTML = data;
     })
     .catch(error => {
         console.error('Error:', error);
         document.getElementById('formMessage').innerHTML = '<p class="error">There was a problem submitting your booking. Please try again later.</p>';
     });
 }

 // Add event listener for the booking form submission
 document.getElementById('bookingForm').addEventListener('submit', submitBookingForm);

 // Function to load a section based on its ID
 function loadSection(sectionId) {
     // Hide all sections
     document.querySelectorAll('section').forEach((section) => {
         section.classList.add('hidden');
     });

     // Show the selected section
     const section = document.getElementById(sectionId);
     if (section) {
         section.classList.remove('hidden');
     }
 }

 // Function to handle search
 function search() {
     const query = document.getElementById('search-input').value.toLowerCase();
     // Add your search logic here
     console.log(`Searching for: ${query}`);
 }

 // Function to handle dropdown toggle
 function toggleServicesDropdown() {
     const dropdown = document.querySelector('nav ul li ul');
     dropdown.classList.toggle('hidden');
 }

 // Function to handle adding item to cart
 function addToCart(productId) {
     // Add your add to cart logic here
     console.log(`Adding product ${productId} to cart`);
 }

 // Function to handle newsletter form submission
 function submitNewsletterForm(event) {
     event.preventDefault();
     const email = document.getElementById('newsletterEmail').value;
     // Add your newsletter subscription logic here
     console.log(`Subscribing with email: ${email}`);
 }

 // Function to handle signup form submission
 function submitSignupForm(event) {
     event.preventDefault();
     const username = document.getElementById('signupUsername').value;
     const email = document.getElementById('signupEmail').value;
     const password = document.getElementById('signupPassword').value;

     if (!username || !email || !password) {
         alert('Please fill out all fields');
         return;
     }


     console.log(`Signing up with username: ${username}, email: ${email}, password: ${password}`);
     alert('Signup successful!');
 }

 // Function to handle login form submission
 function submitLoginForm(event) {
     event.preventDefault();
     const email = document.getElementById('loginEmail').value;
     const password = document.getElementById('loginPassword').value;

     if (!email || !password) {
         alert('Please fill out all fields');
         return;
     }

     // Add your login logic here (e.g., sending data to the server)
     console.log(`Logging in with email: ${email}, password: ${password}`);
     alert('Login successful!');
 }

 // Add event listeners for the forms
 document.getElementById('signupForm').addEventListener('submit', submitSignupForm);
 document.getElementById('loginForm').addEventListener('submit', submitLoginForm);

 // Function to handle showing signup and login forms
 function showSignupForm() {
     loadSection('signup-section');
 }

 function showLoginForm() {
     loadSection('login-section');
 }

 // Add event listeners for the login and signup links in the dropdown menu
 document.getElementById('signup-link').addEventListener('click', showSignupForm);
 document.getElementById('login-link').addEventListener('click', showLoginForm);

// ella.js

