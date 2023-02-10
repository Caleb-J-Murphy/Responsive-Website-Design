//Find the section of the nav bar to change when the hamburger menu is clicked
const hamburger = document.querySelector(".hamburger");
const navTabs = document.querySelector(".mobile-nav");

//Adds a click event to the hamburger menu
hamburger.addEventListener("click", () => {
    //Tells the html that the hamburger menu has been clicked
    hamburger.classList.toggle("active");
    navTabs.classList.toggle("active");
})