

document.getElementById('btn-withdrow').addEventListener('click',function(){

    const newWithdrowAmount = getInputFieldValueById('withdrow-field');

    const previousWithdrowTotal = getTextElementById('withdrow-total');

    const currentWithdrowTotal = newWithdrowAmount+previousWithdrowTotal;

    setTextElementById('withdrow-total',currentWithdrowTotal);

    const previousBalanceTotal = getTextElementById('balance-total');

    const newBalanceTotal = previousBalanceTotal - newWithdrowAmount;
    console.log(newBalanceTotal);

    setTextElementById ('balance-total', newBalanceTotal);

})