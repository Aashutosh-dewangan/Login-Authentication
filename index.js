
function registerUser() {
    const regUsername = document.getElementById("regUsername").value;
    const regPassword = document.getElementById("regPassword").value;
  
    alert("Registration successful!");
    return false; 
  }
  
  function loginUser() {
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;
  
    document.getElementById("login-form").style.display = "none";
    document.getElementById("secured-content").style.display = "block";
  
    return false; 
  }
  
  function logoutUser() {
   
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
      toggleForms.textContent = "New to Authentication? Create account";
    } else {
      registrationForm.style.display = "none";
      loginForm.style.display = "block";
      toggleForms.textContent = "Register page";
    }
  });
  