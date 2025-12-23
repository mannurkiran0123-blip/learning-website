
// Contact form validation
const form = document.getElementById("contactForm");

if(form) { // Only run on contact page
  form.addEventListener("submit", function(e) {
    const name = form.name.value;
    const email = form.email.value;

    if(name === "" || email === "") {
      alert("Please enter your name and email!");
      e.preventDefault(); // Prevent form submission
    }
  });
}
