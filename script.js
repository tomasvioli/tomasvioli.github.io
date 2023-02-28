// JavaScript document - ya esta linkeada

//----------------------------------------------------------------------------------------------------------------------------------------
// NAV BAR 
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//----------------------------------------------------------------------------------------------------------------------------------------

function muestravaner(){
	var element= document.getElementById("experiencias");
	element.classList.toggle("vanershow");
}
function clasevanerhide(){
	var element= document.getElementById("experiencias");
	element.classList.toggle("vanerhide");
}

//----------------------------------------------------------------------------------------------------------------------------------------


function disable(){
	alert("esta opción, por el momoento, no esta disponible");
}