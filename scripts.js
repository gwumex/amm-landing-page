function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

let mySidenav = document.getElementById('mySidenav');
function navBar() {
  window.addEventListener("resize", function () {
      if (window.matchMedia("(min-width: 1200px)").matches) {
        mySidenav.style.display = "none";
      } else {
          return 1;
      }
  });
}
navBar()