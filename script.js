<<<<<<< HEAD
function generatePassword() {
  const length = document.getElementById("length").value;
  const hasUpper = document.getElementById("uppercase").checked;
  const hasLower = document.getElementById("lowercase").checked;
  const hasNumber = document.getElementById("numbers").checked;
  const hasSymbol = document.getElementById("symbols").checked;

  const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerSet = "abcdefghijklmnopqrstuvwxyz";
  const numberSet = "0123456789";
  const symbolSet = "!@#$%^&*()_+[]{}|;:,.<>?";

  let allChars = "";
  if (hasUpper) allChars += upperSet;
  if (hasLower) allChars += lowerSet;
  if (hasNumber) allChars += numberSet;
  if (hasSymbol) allChars += symbolSet;

  if (allChars.length === 0) {
    alert("Please select at least one character type.");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * allChars.length);
    password += allChars[index];
  }

  document.getElementById("password").value = password;
}

function copyPassword() {
  const password = document.getElementById("password");
  password.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}
=======
function generatePassword() {
  const length = document.getElementById("length").value;
  const hasUpper = document.getElementById("uppercase").checked;
  const hasLower = document.getElementById("lowercase").checked;
  const hasNumber = document.getElementById("numbers").checked;
  const hasSymbol = document.getElementById("symbols").checked;

  const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerSet = "abcdefghijklmnopqrstuvwxyz";
  const numberSet = "0123456789";
  const symbolSet = "!@#$%^&*()_+[]{}|;:,.<>?";

  let allChars = "";
  if (hasUpper) allChars += upperSet;
  if (hasLower) allChars += lowerSet;
  if (hasNumber) allChars += numberSet;
  if (hasSymbol) allChars += symbolSet;

  if (allChars.length === 0) {
    alert("Please select at least one character type.");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * allChars.length);
    password += allChars[index];
  }

  document.getElementById("password").value = password;
}

function copyPassword() {
  const password = document.getElementById("password");
  password.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}
>>>>>>> cc621d5b7b9a424b8e972240b1da1870fc3a0ed0
