function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue =parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}
function getTextElementById(elementId){
    const elementTaxt = document.getElementById(elementId);
    const elementTaxtValueString = elementTaxt.innerText;
    const elementTaxtValue = parseFloat(elementTaxtValueString);
    return elementTaxtValue;
}
function setTextElementById(elementId,newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;

}

document.getElementById('btn-withdrow').addEventListener('click',function(){

    const newWithdrowAmount = getInputFieldValueById('withdrow-field');

    const previousWithdrowTotal = getTextElementById('withdrow-total');

    const currentWithdrowTotal = newWithdrowAmount+previousWithdrowTotal;

    setTextElementById('withdrow-total',currentWithdrowTotal);

    const previousBalanceTotal = getTextElementById('balance-total');

    const newBalanceTotal = previousBalanceTotal - newWithdrowAmount;

    setTextElementById ('balance-total', newBalanceTotal);

})