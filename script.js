 function validateForm() {
      var name = document.forms["myForm"]["name"].value;
      var email = document.forms["myForm"]["email"].value;
      var phone = document.forms["myForm"]["phone"].value;
      var password = document.forms["myForm"]["password"].value;
      var confirmPassword = document.forms["myForm"]["confirmPassword"].value;
      
      // Name validation
      if (name.length < 5) {
        document.getElementById("nameError").textContent ="Name must be at least 5 characters long";
        return false;
      }
      document.getElementById("nameError").textContent ="";
      
      // Email validation
      if (!email.includes("@")) {
        document.getElementById("emailError").textContent ="Enter a valid email address";
        return false;
      }
      document.getElementById("emailError").textContent ="";

      // Phone number validation
      if (phone === "123456789" || phone.length !== 10 || isNaN(phone)) {
        document.getElementById("phoneError").textContent = "Enter a valid 10-digit phone number";
        return false;
      }
      document.getElementById("phoneError").textContent ="";
  
      
      // Password validation
      if (password.length < 8 || password === "password" || password === name) {
        document.getElementById("passwordError").textContent ="Password must be at least 8 characters long and should not be 'password' or your name";
        return false;
      }
      document.getElementById("passwordError").textContent ="";
      
      // Confirm password validation
      if (password !== confirmPassword) {
        document.getElementById("CpasswordError").textContent ="Passwords do not match";
        return false;
      }
      document.getElementById("CpasswordError").textContent ="";
    }



