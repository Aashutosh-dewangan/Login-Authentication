// Function to register a user (simplified without server interaction)
function registerUser() {
    const regUsername = document.getElementById("regUsername").value;
    const regPassword = document.getElementById("regPassword").value;
  
    // Store the user data securely (not implemented here)
  
    alert("Registration successful!");
    return false; // Prevent form submission
  }
  
  // Function to login a user (simplified without server interaction)
  function loginUser() {
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;
  
    // Authenticate user (not implemented here)
  
    // If authentication is successful, show secured content
    document.getElementById("login-form").style.display = "none";
    document.getElementById("secured-content").style.display = "block";
  
    return false; // Prevent form submission
  }
  
  // Function to logout a user
  function logoutUser() {
    // Clear session or perform necessary logout actions
    document.getElementById("login-form").style.display = "block";
    document.getElementById("secured-content").style.display = "none";
  }

  const registrationForm = document.getElementById("registration-form");
  const toggleForms = document.getElementById("toggleForms");
  const loginForm = document.getElementById("login-form");

  toggleForms.addEventListener("click", function () {
    if (registrationForm.style.display === "none" || registrationForm.style.display === "") {
      registrationForm.style.display = "block";
      loginForm.style.display = "none";
      toggleForms.textContent = "Login page";
    } else {
      registrationForm.style.display = "none";
      loginForm.style.display = "block";
      toggleForms.textContent = "Register page";
    }
  });
  