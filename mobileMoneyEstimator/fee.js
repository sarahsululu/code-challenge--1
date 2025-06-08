//function to estimate mobile money transfer fee
function estimateTransactionFee() {
//prompt the user to enter the amount they wish to send
let amountInput = prompt("Unatuma Ngapi? (KES):");
//convert the input to a number
let amount = parseFloat(amountInput);
//define the fee structure
  const percentageFeeRate = 0.015; // 1.5%
  const minimumFee = 10; // KES
  const maximumFee = 70; // KES

//calculate the transaction fee
 let calculatedFee = amount * percentageFeeRate;

 //apply the minimum fee and maximum fee limits
     let initialFee = amount * percentageFeeRate;
        if (initialFee < minimumFee) {
            calculatedFee = minimumFee;
        } else if (initialFee > maximumFee) {
            calculatedFee = maximumFee;
        } else {
            calculatedFee = initialFee;
        }

//calculate total amount debited
const totalDebited = amount + calculatedFee;

//print the results to the console
 console.log(`Sending KES ${amount}:`);
 console.log(`Calculated Transaction Fee: KES ${calculatedFee}`);
 console.log(`Total amount to be debited: KES ${totalDebited}`);

}

// Call the function to estimate transaction fee
estimateTransactionFee();



