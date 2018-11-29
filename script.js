// I pledge my honor that I have abided by the Stevens Honor System.
// Andrew Chuah

// For the navigation tabs: when hovered, change color.
var navButtons = document.querySelectorAll("nav > ul > li");

for(let i = 0; i < navButtons.length; i++){
    navButtons[i].addEventListener("mouseover", function(){
        navButtons[i].style.backgroundColor = "rgb(163,38,56)";
        navButtons[i].style.color = "white";
    });

    navButtons[i].addEventListener("mouseleave", function(){
        navButtons[i].style.backgroundColor = "white";
        navButtons[i].style.color = "black";
    });
}