
// Function for DOM checking radio buttons.

function radioButtonCheck() {

    var radioButtonOne = document.getElementById("radioOne");
    var radioButtonTwo = document.getElementById("radioTwo");
    var radioButtonThree = document.getElementById("radioThree");
    var radioButtonFour = document.getElementById("radioFour");

    radioButtonOne.checked = false;
    radioButtonTwo.checked = false;
    radioButtonThree.checked = false;
    radioButtonFour.checked = false;

}

// Javascript Object for Form Validation.
function Order(cardName, cardNumber, expirationMonth, expirationYear, cvc) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.email = email;
    this.cardNumber = cardNumber;
    this.expirationDate = expirationDate;
    this.cvc = cvc;
    this.radioOne = radioOne;
    this.radioTwo = radioTwo;
    this.radioThree = radioThree;
    this.radioFour = radioFour;
    this.radioFour = radioFour;
}

function validateForm(firstName, lastName, address, email, cardNumber, expirationDate, cvc, radioOne, radioTwo, radioThree, radioFour, radioOther) {

    var lettersOnly = /^[A-Za-z\s]+$/;

    var cardNumberLength = /^([0-9]{16})$/;

    var allowSpaces = /^[a-z\u00C0-\u00ff\s]+$/;

    var expirationDateLength = /^([0-9]{4})$/;

    var cvcLength = /^([0-9]{3})$/;

    // First Name Validation.
    if (firstName.value.match(lettersOnly) && firstName.value.match(allowSpaces)) {

        alert("Your First Name was accepted.")

    } else {

        alert("First Name field is incorrect! Please input alphabetic characters only.");
        return false;

    }

    // Last Name Validation.
    if (lastName.value.match(lettersOnly) && lastName.value.match(allowSpaces)) {

        alert("Your Last Name was accepted.")

    } else {

        alert("Last Name field is incorrect! Please input alphabetic characters only.");
        return false;

    }

    // Card Number Validation.
    if (cardNumber.value.match(cardNumberLength)) {

        alert("Your card was accepted.");

    } else {

        alert("Not a valid credit card number! 16 Character numeric required.");
        return false;

    }

    // Expiration Date Validation.

    if (expirationDate.value.match(expirationDateLength)) {

        alert("Your Expiration Date was accepted.");

    } else {

        alert("Your Expiration Date can only be 4 characters! Please try again.");
        return false;

    }

    if (cvc.value.match(cvcLength)) {

        alert("Your Card CVC was accepted.");

    } else {

        alert("Your Card CVC can only be 3 characters! Please try again.");
        return false;

    }


    // Radio Button Validation.

    if (radioOne.checked == true || radioTwo.checked == true || radioThree.checked == true || radioFour.checked == true || radioOther.value != "") {

        alert("Thank you for your donation amount! Have a great day!");
        return true;

    } else {

        alert("You have not selected a donation amount! Please try again.");
        return false;

    }

}