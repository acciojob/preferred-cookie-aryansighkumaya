//your JS code here. If required.
// Function to get cookie value by name
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");  
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Function to set a cookie
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to apply user preferences from cookies
function applyUserPreferences() {
  const fontsize = getCookie("fontsize");
  const fontcolor = getCookie("fontcolor");

  if (fontsize) {
    document.documentElement.style.setProperty("--fontsize", fontsize + "px");
    document.getElementById("fontsize").value = fontsize;
  }

  if (fontcolor) {
    document.documentElement.style.setProperty("--fontcolor", fontcolor);
    document.getElementById("fontcolor").value = fontcolor;
  }
}

// Handle form submission to save user preferences in cookies
document.getElementById("customizationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  const fontsize = document.getElementById("fontsize").value;
  const fontcolor = document.getElementById("fontcolor").value;

  // Set cookies with user preferences
  setCookie("fontsize", fontsize, 7);
  setCookie("fontcolor", fontcolor, 7);
  
  // Apply the preferences immediately
  document.documentElement.style.setProperty("--fontsize", fontsize + "px");
  document.documentElement.style.setProperty("--fontcolor", fontcolor);
});

// Apply preferences when the page loads
window.onload = applyUserPreferences;
