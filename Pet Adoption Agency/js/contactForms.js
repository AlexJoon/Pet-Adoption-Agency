
var feedbackForm = document.getElementById("form-1");
var mailingForm = document.getElementById("form-2");
var savingForm = document.getElementById("form-3");

function feedbackFunc() {

    feedbackForm.classList.toggle('toggle-display');

    if (mailingForm.classList.contains('toggle-display') == false || savingForm.classList.contains('toggle-display') == false) {

        mailingForm.classList.toggle('toggle-display');
        savingForm.classList.toggle('toggle-display');

    }

}

function mailingFunc() {

    mailingForm.classList.toggle('toggle-display');

    if (feedbackForm.classList.contains('toggle-display') == false || savingForm.classList.contains('toggle-display') == false) {

        feedbackForm.classList.toggle('toggle-display');
        savingForm.classList.toggle('toggle-display');

    }

}

function savingFunc() {

    savingForm.classList.toggle('toggle-display');

    if (feedbackForm.classList.contains('toggle-display') == false || mailingForm.classList.contains('toggle-display') == false) {

        feedbackForm.classList.toggle('toggle-display');
        mailingForm.classList.toggle('toggle-display');

    }

}

// Overloaded Functions.


// Order function for feedback form on contact page.
function Order(feedbackFirstName, feedbackLastName, feedbackEmail, feedbackDetails) {


    this.feedbackFirstName = feedbackFirstName;
    this.feedbackLastName = feedbackLastName;
    this.feedbackEmail = feedbackEmail;
    this.feedbackDetails = feedbackDetails;


}

// Order function for mailing form on contact page.
function Order(mailingFirstName, mailingLastName, mailingEmail, mailingAddress, kindOf) {

    this.mailingFirstName = mailingFirstName;
    this.mailingLastName = mailingLastName;
    this.mailingEmail = mailingEmail;
    this.mailingAddress = mailingAddress;
    this.kindOf = kindOf;

}

// Order function for saving form on contact page.
function Order(savingFirstName, savingLastName, savingEmail, savingPhone, savingDetails) {

    this.savingFirstName = savingFirstName;
    this.savingLastName = savingLastName;
    this.savingEmail = savingEmail;
    this.savingPhone = savingPhone;
    this.savingDetails = savingDetails;


}

function validateFeedbackForm(feedbackFirstName, feedbackLastName, feedbackEmail, feedbackDetails) {

    var lettersOnly = /^[A-Za-z\s]+$/;

    var allowSpaces = /^[a-z\u00C0-\u00ff\s]+$/;

    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // First Name Validation.
    if (feedbackFirstName.value.match(lettersOnly) && feedbackFirstName.value.match(allowSpaces)) {

        alert("Your First Name was accepted.")

    } else {

        alert("First Name field is incorrect! Please input alphabetic characters only.");
        return false;

    }

    // Last Name Validation.
    if (feedbackLastName.value.match(lettersOnly) && feedbackLastName.value.match(allowSpaces)) {

        alert("Your Last Name was accepted.")

    } else {

        alert("Last Name field is incorrect! Please input alphabetic characters only.");
        return false;

    }

    // Email Validation.
    if (feedbackEmail.value.match(emailReg)) {

        alert("Your Email was accepted.");


    } else {

        alert("Email field cannot be empty! Please try again.");
        return false;

    }

    // Feedback Text Area validation.
    if (feedbackDetails.value == null || feedbackDetails.value != "") {

        alert("Your Feedback was accepted.");


    } else {

        alert("The feedback area cannot be empty! Please try again.");
        return false;

    }

}

function validateMailingForm(mailingFirstName, mailingLastName, mailingEmail, mailingAddress, kindOf) {

    var lettersOnly = /^[A-Za-z\s]+$/;

    var allowSpaces = /^[a-z\u00C0-\u00ff\s]+$/;

    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // First Name Validation.
    if (mailingFirstName.value.match(lettersOnly) && mailingFirstName.value.match(allowSpaces)) {

        alert("Your First Name was accepted.")

    } else {

        alert("First Name field is incorrect! Please input alphabetic characters only.");
        return false;

    }

    // Last Name Validation.
    if (mailingLastName.value.match(lettersOnly) && mailingLastName.value.match(allowSpaces)) {

        alert("Your Last Name was accepted.")

    } else {

        alert("Last Name field is incorrect! Please input alphabetic characters only.");
        return false;

    }

    // Email Validation.
    if (mailingEmail.value.match(emailReg)) {

        alert("Your Email was accepted.");


    } else {

        alert("Email field cannot be empty! Please try again.");
        return false;

    }

    // Address Validation.
    if (mailingAddress.value != null || mailingAddress.value != "") {

        alert("Your Address was accepted.");


    } else {

        alert("Address field cannot be empty! Please try again.");
        return false;

    }

    if (kindOf.value == "None Selected") {

        alert("Please select your favorite pet from the list.");
        return false;

    } else {

        alert("Thank you! Your favorite pet is " + kindOf.value + " ! ");


    }


}

function validateSavingForm(savingFirstName, savingLastName, savingEmail, savingPhone, savingDetails) {

    var lettersOnly = /^[A-Za-z\s]+$/;

    var allowSpaces = /^[a-z\u00C0-\u00ff\s]+$/;

    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    var PhoneNumberOnly = /^([0-9]{10})$/;

    // First Name Validation.
    if (savingFirstName.value.match(lettersOnly) && savingFirstName.value.match(allowSpaces)) {

        alert("Your First Name was accepted.")

    } else {

        alert("First Name field is incorrect! Please input alphabetic characters only.");
        return false;

    }

    // Last Name Validation.
    if (savingLastName.value.match(lettersOnly) && savingLastName.value.match(allowSpaces)) {

        alert("Your Last Name was accepted.")

    } else {

        alert("Last Name field is incorrect! Please input alphabetic characters only.");
        return false;

    }

    // Email Validation.
    if (savingEmail.value.match(emailReg)) {

        alert("Your Email was accepted.");


    } else {

        alert("Email field cannot be empty and must be 10 characters long! Please try again.");
        return false;

    }

    if (savingPhone.value.match(PhoneNumberOnly)) {

        alert("Your Phone number was accepted.");

    } else {

        alert("Phone Number field cannot be empty! Please try again.");
        return false;

    }

    if (savingDetails.value == null || savingDetails.value != "") {

        alert("Your Feedback was accepted.");


    } else {

        alert("The feedback area cannot be empty! Please try again.");
        return false;

    }

}