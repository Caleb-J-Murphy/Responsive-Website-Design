/*
    This js file is used to validate the input fields when the user clicks out
    of the input field. If the form is not correct, then an error class is 
    added to the class. 
*/

function validateEmail($email) {
    //Regex used to test the email.
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( $email );
}

$(document).ready(function(){
    //Check for something in input name field.
    $('#contactForm input[type="text"]').blur(function(){
        //Check if there is something in the element when the user clicks of page
        if(!$(this).val()){ //Add an error class if there isn't something in the page
            $(this).addClass("error");
            $(this).removeClass("correct");
        } else{ //Remove the error class if there is something in the page.
            $(this).removeClass("error");
            $(this).addClass("correct");
        }
    });

    //Check for something in message field.
    $('#contactForm textarea').blur(function(){
        //Check if there is something in the element
        if(!$(this).val()){
            $(this).addClass("error");
        } else{ //Remove the error class if there is something in the page.
            $(this).removeClass("error");
        }
    });

    //Check that the email is valid
    $('#contactForm input[type=email]').blur(function(){ //Called when the user leaves the input field
        console.log("Blur worked");
        //Check that the email is of the correct format and if there is something in the field
        if(!validateEmail($('#contactForm input[type=email]').val()) || !$(this).val()){
            $(this).addClass("wrong-email");
            $(this).removeClass("correct");
        } else{ //Remove the error class if there is something in the page.
            $(this).removeClass("wrong-email");
            $(this).addClass("correct");
        }
    });
});