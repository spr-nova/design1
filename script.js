// let icon = document.getElementsByClassName("iconee");

// let nav = document.getElementsByClassName("hide");

// icon.onclick = function () {
//   // nav.style.display = "block";
//   console.log("hello");
// };

let tgg = document.getElementById("toggle") 
let ul = document.getElementById("hidee")

tgg.onclick = function(){
  ul.classList.toggle("hide")
}