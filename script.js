const formTitle = document.getElementById("formTitle");
const toggleText = document.getElementById("toggleText");
const submitBtn = document.getElementById("submitBtn");
const greetingText = document.getElementById("greetingText");
const authForm = document.getElementById("authForm");
const strengthText = document.getElementById("strengthText");
const passwordInput = document.getElementById("password");

let isLogin = true;

// AI-style greeting
const hour = new Date().getHours();
if (hour < 12) {
  greetingText.innerText = "☀️ Good Morning!";
} else if (hour < 18) {
  greetingText.innerText = "🌤️ Good Afternoon!";
} else {
  greetingText.innerText = "🌙 Good Evening!";
}

// Toggle Login <-> Signup
toggleText.addEventListener("click", () => {
  isLogin = !isLogin;
  formTitle.innerText = isLogin ? "Login" : "Sign Up";
  submitBtn.innerText = isLogin ? "Login" : "Register";
  toggleText.innerText = isLogin
    ? "Don't have an account? Sign up"
    : "Already have an account? Login";
});

// AI Password Strength Checker
passwordInput.addEventListener("input", () => {
  const val = passwordInput.value;
  if (val.length < 6) {
    strengthText.innerText = "🔴 Weak (Min 6 characters)";
    strengthText.style.color = "red";
  } else if (/[A-Z]/.test(val) && /[0-9]/.test(val)) {
    strengthText.innerText = "🟢 Strong Password";
    strengthText.style.color = "green";
  } else {
    strengthText.innerText = "🟡 Moderate - Add numbers & capital letters";
    strengthText.style.color = "orange";
  }
});

// Simulated form submission
authForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = passwordInput.value;
  alert(`${isLogin ? '🔐 Logging in' : '📝 Registering'} as ${username}`);
});
