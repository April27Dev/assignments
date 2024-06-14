/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
//basically i need to traverse the array and group different tansactions together and total their price
function calculateTotalSpentByCategory(transactions) {
  let res={};
  for(let t of transactions){
         res[t.category]=(res[t.category] || 0)+t.price;
  }
  return res;
}

module.exports = calculateTotalSpentByCategory;
