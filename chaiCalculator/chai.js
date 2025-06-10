var prompt = require('prompt-sync')();
// Function to calculate chai ingredients
function calculateChaiIngredients() {
  // Prompt user for number of cups
  let numberOfCupsInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
  // Convert input to a number
  let numberOfCups = parseInt(numberOfCupsInput);

  // Standard recipe for one cup of chai
  const waterPerCup = 200; // in ml
  const milkPerCup = 50; // in ml
  const teaLeavesPerCup = 1; // tablespoon
  const sugarPerCup = 2; // teaspoons

  // Calculate required amount of each ingredient
  const totalWater = waterPerCup * numberOfCups;
  const totalMilk = milkPerCup * numberOfCups;
  const totalTeaLeaves = teaLeavesPerCup * numberOfCups;
  const totalSugar = sugarPerCup * numberOfCups;

  // Print the results to the console
  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
  console.log("\nEnjoy your Chai Bora!");
}

// Call the function
calculateChaiIngredients();


