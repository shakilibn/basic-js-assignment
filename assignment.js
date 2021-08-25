// problem 1
function seerToMon(seer) {
  // if parameter is negative number
  if (seer < 0) {
    return "seer can't be negative number. Please enter positive number";
  }
  //   if parameter is string
  if (typeof seer != "number") {
    return "seer can't be string. Pleaser enter number";
  }
  const mon = seer / 40;
  return mon;
}
// console.log(seerToMon(120));

// problem 2
function totalSales(shirtQ, pantQ, shoeQ) {
  // if parameter is negative
  if (shirtQ < 0 || pantQ < 0 || shoeQ < 0) {
    return "quantity can't be negative, please enter correctly";
  }
  //   if paramter type is not number
  if (
    typeof shirtQ != "number" ||
    typeof pantQ != "number" ||
    typeof shoeQ != "number"
  ) {
    return "quantity can't be string, please enter number";
  }
  const shirtPrice = shirtQ * 100;
  const pantPrice = pantQ * 200;
  const shoePrice = shoeQ * 500;

  const totalPrice = shirtPrice + pantPrice + shoePrice;
  return totalPrice;
}
// console.log(totalSales(2, 2, 2));

// problem 3
function deliveryCost(quantity) {
  let deliveryCost = 0;
  //   if the quantity is negative
  if (quantity < 0) {
    return "quantity can't be negative, please enter positive number";
  }
  //   if the quantity type is not number
  if (typeof quantity != "number") {
    return "quantity must be number";
  }
  if (quantity <= 100) {
    deliveryCost = quantity * 100;
  } else if (quantity <= 200) {
    const secondHundredQuantity = quantity - 100;
    const firstHundredPrice = 100 * 100;
    const secondHundredPrice = secondHundredQuantity * 80;
    deliveryCost = firstHundredPrice + secondHundredPrice;
  } else {
    const firstHundredPrice = 100 * 100;
    const secondHundredPrice = 100 * 80;
    const overSecondHundredQ = quantity - 200;
    const overSecondHundredPrice = overSecondHundredQ * 50;

    deliveryCost =
      firstHundredPrice + secondHundredPrice + overSecondHundredPrice;
  }
  return deliveryCost;
}
// console.log(deliveryCost("shakil"));

// problem 4
function perfectFriend(array) {
  for (const element of array) {
    if (element.length === 5) {
      return element;
    }
  }
}
const friends = ["opu", "sani", "tani", "labib", "shakil"];
console.log(perfectFriend(friends));
