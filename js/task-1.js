function makeTransation (quantity, pricePerDroid) {
const totalPrice = quantity * pricePerDroid;
return (`You ordered ${quantity} droids worth ${totalPrice} credits!`);
};
console.log(makeTransation(5, 3000));
console.log(makeTransation(3, 1000));
console.log(makeTransation(10, 500));

