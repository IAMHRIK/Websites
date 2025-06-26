document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("response").innerText = "Authenticating AI neural network...";
  setTimeout(() => {
    document.getElementById("response").innerText = "Access Denied. This is a simulation.";
  }, 2000);
});