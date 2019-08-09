console.log('hhhhh');

function displayPostCode() {
    var variable = document.getElementById('postal_codeID').value;
    document.getElementById('displayID').innerHTML = 'Postal code is : ' + variable;


    // document.getElementById('displayID').innerHTML = 'Postal code is : ' + postal_codeID.value;

    // displayID.innerHTML = 'Postal code is : ' + postal_codeID.value;
}

// console.log(typeof (credit_cardID));
// console.log(credit_cardID, 'This is b4');
// console.log(typeof (credit_cardID.value));

credit_cardID.oninput = function () {
    display_credit_card.innerHTML = credit_cardID.value;
}

console.log('hhhhhkkjkmkkkl');