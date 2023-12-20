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

function calculateTotalSpentByCategory(transactions) {
  let categoryTotals = {};

  // iterating through transactions
  transactions.forEach(transaction => {
    const { category, price } = transaction;

    // adding, if not already present;
    if (!categoryTotals[category]) {
      categoryTotals[category] = price;
    } else {
      // if already present
      categoryTotals[category] += price;
    }
  });

  // converting into an array of objects
  const result = Object.keys(categoryTotals).map(category => ({
    category,
    totalSpent: categoryTotals[category]
  }))
  return result;
}

// re-attempt with multiple solutions

module.exports = calculateTotalSpentByCategory;
