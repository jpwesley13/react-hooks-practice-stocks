import React from "react";
import Stock from "./Stock";

function PortfolioContainer({myStocks, handleRemoveStock}) { 
  const myStocksToDisplay = myStocks.map(stock => (
    <Stock 
    key={stock.id}
    stock={stock} //when a component is being shared between two siblings, it needs to be utilized in the same way. Passed down in the same way. I did this by just doing stock={stock} on both.
    handleStock={handleRemoveStock} //because the child Stock is going to be handling two different events on one click, I want these two separate sibling parents to pass down the same named prop, I guess? This and StockContainer. 
    />
  ))

  return (
    <div>
      <h2>My Portfolio</h2>
      {myStocksToDisplay}
    </div>
  );
}

export default PortfolioContainer;
