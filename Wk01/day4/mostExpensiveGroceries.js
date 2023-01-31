function costOfGroceries(groceries) {
    
    let cost = 0;

    for (let i = 0; i < groceries.length; i++) {
        if (groceries[i] === 'butter') {
            cost += 1;
        } else if (groceries[i] === 'eggs') {
            cost += 2;
        } else if (groceries[i] === 'milk') {
            cost += 3;
        } else if (groceries[i] === 'bread') {
            cost += 4;
        } else if (groceries[i] === 'cheese') {
            cost += 5;
        } else {
            cost += 0;
        }
    }

    return cost;
}


function mostExpensiveGroceries(groceriesList) {
    
    let maxCost = 0;
    let maxCostIdx = null;

    for (let i = 0; i < groceriesList.length; i++) {
        if (costOfGroceries(groceriesList[i]) > maxCost) {
            maxCost = costOfGroceries(groceriesList[i])
            maxCostIdx = i;
        }

        return maxCostIdx;
    }
}
