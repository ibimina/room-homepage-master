// get the hamburger button
// get the navigation element
//add a click event listener to the hamburger 
// set a condition that checks if the navigation is not visible 
//if true show the navigation and change the hamurger image to a closed icon
//if false hide the navigation and change the the clos eicon to the hamburger

const hamburger = document.querySelector(".mobile-navigation")
const navigation = document.querySelector(".primary-navigation")


hamburger.addEventListener("click",e=>{
    e.preventDefault()
    const visibility = navigation.getAttribute("data-visible")

if (visibility==="false") {
    hamburger.setAttribute("aria-expanded",true)
    navigation.setAttribute("data-visible",true)
} else {
     hamburger.setAttribute("aria-expanded", false);
     navigation.setAttribute("data-visible", false);
}

})
//queryselect the slide parent container
//set them to display none 
//add an event listemer to the parent container check when the arrow button is click
//set a condition to display the next or previous slide when the arrow is click

const hero= document.querySelectorAll(".hero")

function reset() {
 hero.forEach((element) => {
   element.style.display = "none";
 });   
}
//reset()
let current = 0
function slideLeft() {
reset()
hero[current -1 ].style.display = "grid";
    current--;
}
function slideRight() {
    reset()
    hero[current + 1].style.display ="grid"
    current++
}
hero.forEach(element => {
    element.addEventListener("click",e=>{
        let arrow= e.target
        if (arrow.className.includes("left")) {

           if (current === 0) {
             current = hero.length;
           }
           slideLeft(); 
        } else if (arrow.className.includes("right")) {
            if (current === hero.length - 1) {
              current = -1;
            }
            slideRight();
        }
    })
});



function start() {
    reset()
  hero[0].style.display = "grid";  
}
start()
