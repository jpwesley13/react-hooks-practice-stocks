import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, handleAddStock, sortBy, filterBy}) { //props passed as an object, curly brackets are destructuring the object, props being passed as a name of stocks.

  const stocksToDisplay = stocks
  .filter(stock => filterBy === "" || stock.type.toLowerCase() === filterBy.toLowerCase()) //by using filterBy === "" ||, I'm saying, if filterBy is an empty string, just take everything and move onto .sort, OR if it's not, then filter stock.typer.toLowerCase etc and pass THAT on to .sort.
  .sort((stock1, stock2) => {
    if(sortBy === "Alphabetically") {
      return stock1.name.localeCompare(stock2.name)
    } else if (sortBy === "Price") {
      return stock1.price - stock2.price;
    }
  }) //do sort BEFORE map, because map is giving back an array of components, whereas sort will give me an array of objects I can still chain map onto.
  .map(stock => 
    <Stock 
      key={stock.id}
      stock={stock}
      handleStock={handleAddStock} //see Portfolio container for naming reason
    />
  )

  return (
    <div>
      <h2>Stocks</h2>
      {stocksToDisplay}
    </div>
  );
}

export default StockContainer;
