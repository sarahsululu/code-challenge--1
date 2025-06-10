var prompt = require('prompt-sync')();
//function calculateBodaFare
  function calculateBodaFare(distance, time) {
//prompt the user distance in kilometers
 let distanceInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
 //convert the input to a number
 let distanceInKm = parseFloat(distanceInput)

 //Fare Calculation Rules
const baseFare = 50; //KES
const chargePerKm = 15; //KES 

//calculate the total estimate fare
const totalFare = baseFare + (distanceInKm * chargePerKm);
//calculate charege specifically for the distance 
const distanceCharge = distanceInKm * chargePerKm;

//print the results to console
  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceCharge}`);
  console.log(`Total: KES ${totalFare}`);
  console.log("\nPanda Pikipiki!"); 
  }

// Call the function to calculate fare
calculateBodaFare();