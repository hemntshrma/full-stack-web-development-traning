let myFee = 0;

function payFee(payment) {
    console.log(`your fee ${payment} is paid`);
    myFee = payment;
}

function getFee() {
    return myFee;
}

export { payFee, getFee };