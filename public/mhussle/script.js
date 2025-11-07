// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.style.display =
    navLinks.style.display === "flex" ? "none" : "flex";
});

// Form Validation and Submission
const signupForm = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");

// Phone number formatting
const phoneInput = document.getElementById("phone");
phoneInput.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "");
  if (value.length > 10) value = value.slice(0, 10);

  if (value.length >= 6) {
    value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
  } else if (value.length >= 3) {
    value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
  }

  e.target.value = value;
});

// Email validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Phone validation
function validatePhone(phone) {
  const cleaned = phone.replace(/\D/g, "");
  return cleaned.length === 10;
}

// Form submission
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const location = document.getElementById("location").value;

  // Validate
  if (!validateEmail(email)) {
    showMessage("Please enter a valid email address.", "error");
    return;
  }

  if (!validatePhone(phone)) {
    showMessage("Please enter a valid 10-digit phone number.", "error");
    return;
  }

  // Create data object
  const formData = {
    name: name,
    email: email,
    phone: phone,
    location: location,
    timestamp: new Date().toISOString(),
  };

  // Save to local file (download as text file)
  saveToFile(formData);

  // Show success message
  showMessage(
    "Success! Your information has been saved. We'll contact you soon!",
    "success"
  );

  // Reset form
  signupForm.reset();
});

function showMessage(message, type) {
  formMessage.textContent = message;
  formMessage.className = `form-message ${type}`;
  formMessage.style.display = "block";

  setTimeout(() => {
    formMessage.style.display = "none";
  }, 5000);
}

function saveToFile(data) {
  // Create a formatted string
  const content = `
=================================
MUSCLE HUSTLE - NEW SIGNUP
=================================
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Preferred Location: ${data.location}
Timestamp: ${data.timestamp}
=================================

`;

  // Check if we have existing data in localStorage
  let existingData = localStorage.getItem("muscleHustleSignups") || "";
  existingData += content;
  localStorage.setItem("muscleHustleSignups", existingData);

  // Create a blob and download
  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `muscle-hustle-signup-${Date.now()}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Close mobile menu if open
      if (window.innerWidth <= 768) {
        navLinks.style.display = "none";
      }
    }
  });
});

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll(".about-card, .location-card, .membership-card")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s, transform 0.6s";
    observer.observe(el);
  });
