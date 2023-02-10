/*
    This js file is used in the contact page of the website and is in charge of
    opening a modal asking the user if they wish to submit the messege they 
    wrote. Depending on their response a different model is also create.
*/

//Get the form
const form  = document.getElementById('contactForm');

//Check if the subit button is clicked on the contact page
form.addEventListener('submit', (event) => {
    // Stop the form submission
    event.preventDefault();
    // When the user clicks the button, open the modal 
    mainModal.style.display = "flex";
    mainModal.classList.add("modalextraclass");
});

// Get the modal
var mainModal = document.getElementById("modal");

var yesButtom = document.getElementById("yes");
var noButtom = document.getElementById("no");

//Get the successful messege modal
var succModal = document.getElementById("yes-mess");
var failModal = document.getElementById("no-mess");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    //Determine what the current model is and remove it.
    if (event.target == mainModal) {
        mainModal.style.display = "none";
    } else if (event.target == succModal) {
        succModal.style.display = "none";
    } else if (event.target == failModal) {
        failModal.style.display = "none";
    }
}

//Called if the yes button is clicked on the main model. 
yesButtom.onclick = function(event) {
    //Close the modal
    mainModal.style.display = "none";
    mainModal.classList.remove("modalextraclass");
    //Display the submit message modal
    succModal.style.display = "flex";
}
//Called if the no button is clicked on the main model.
noButtom.onclick = function(event) {
    //Close the modal
    mainModal.style.display = "none";
    mainModal.classList.remove("modalextraclass");
    //Display the decline message modal
    failModal.style.display = "flex";
}