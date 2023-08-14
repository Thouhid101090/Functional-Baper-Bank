

document.getElementById('btn-deposit').addEventListener('click',function(){

    const newDepositAmount = getInputFieldValueById('deposit-field');

    const previousDepositTotal = getTextElementById('deposit-total');
    

    const currentDepositTotal = newDepositAmount + previousDepositTotal;

    setTextElementById('deposit-total', currentDepositTotal);

    const previousBalanceTotal = getTextElementById('balance-total');
    
    const newBalanceTotal = previousBalanceTotal+newDepositAmount;

    setTextElementById('balance-total', newBalanceTotal);

   
})
