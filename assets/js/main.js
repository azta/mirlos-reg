
function displayMenu(event) {
    if (document.getElementById("navbar-list").classList.contains("show")) {
      document.getElementById("navbar-list").classList.remove("show")
    }
    else {
      document.getElementById("navbar-list").classList.add("show")
    }
}

