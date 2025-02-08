
"user strict"
const logo_mobile = document.querySelector(".logo-mobile img")
const logo_mobile2 = document.querySelector(".logo-mobile2 img")
const sidebar = document.querySelector(".sidebar")

logo_mobile.addEventListener("click", function(event) {
  event.preventDefault()
  sidebar.classList.add("visible");    // Adiciona uma classe
  sidebar.classList.remove("hidden");  // Remove uma classe

})
logo_mobile2.addEventListener("click", function (event) {
  event.preventDefault()
  sidebar.classList.remove("visible");
  sidebar.classList.add("hidden");
})
