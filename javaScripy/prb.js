function calculateFare(distance) {
  let fare = 0;
  if (distance <= 4) {
    fare = 30; 
  } else if (distance <= 9) {
    fare = 30 + (distance - 4) * 10; 
  } else if (distance <= 19) {
    fare = 30 + (5*10) + (distance - 9) * 15;
  } else {
    fare = 30 + (5 * 10) + (10 * 15) + (distance - 19) * 20; 
  }

  return fare;
}
let travelled = 19.5;
console.log("Total fare for " + travelled + " km = Rs:" + calculateFare(travelled));
