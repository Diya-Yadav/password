const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const passwordInput = document.getElementById("password");
const copyBtn = document.getElementById("copy");
const generateBtn = document.getElementById("generate");
const copiedMsg = document.getElementById("copied");
const strengthMeter = document.getElementById("strengthMeter");
const showPassword = document.getElementById("showPassword");
const toggleMode = document.getElementById("toggleMode");

lengthSlider.addEventListener("input", () => {
  lengthValue.textContent = lengthSlider.value;
});

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordInput.value).then(() => {
    copiedMsg.classList.remove("hidden");
    setTimeout(() => copiedMsg.classList.add("hidden"), 1500);
  });
});

showPassword.addEventListener("change", () => {
  passwordInput.type = showPassword.checked ? "text" : "password";
});

toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

function generatePassword() {
  const length = +lengthSlider.value;
  let charset = "abcdefghijklmnopqrstuvwxyz";
  if (uppercase.checked) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (numbers.checked) charset += "0123456789";
  if (symbols.checked) charset += "!@#$%^&*()_+[]{}|;:,.<>?";

  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }

  passwordInput.value = password;
  updateStrength(password);
}

function updateStrength(password) {
  let strength = 0;
  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/\d/.test(password)) strength++;
  if (/[!@#$%^&*]/.test(password)) strength++;

  const width = strength * 25;
  strengthMeter.style.width = width + "%";
  strengthMeter.style.background =
    strength <= 1 ? "red" : strength === 2 ? "orange" : "green";
}
