
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


document.getElementById('btn-deposit').addEventListener('click',function(){

    const newDepositAmount = getInputFieldValueById('deposit-field');

    const previousDepositTotal = getTextElementById('deposit-total');
    

    const currentDepositTotal = newDepositAmount + previousDepositTotal;

    setTextElementById('deposit-total', currentDepositTotal);

    const previousBalanceTotal = getTextElementById('balance-total');
    
    const newBalanceTotal = previousBalanceTotal+newDepositAmount;

    setTextElementById('balance-total', newBalanceTotal);

   
})
