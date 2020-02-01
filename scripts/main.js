function openNav() {

  if(document.getElementById("mySidenav").style.width!="200px"){
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("container").style.filter = "contrast(50%)";

  } else {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("container").style.filter = "contrast(100%)";
      }
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
