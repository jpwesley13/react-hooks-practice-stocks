import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [myStocks, setMyStocks] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/stocks`)
    .then(res => res.json())
    .then(setStocks)
    .catch(error => alert(error))
  }, [])

  function handleAddStock(addedStock) {
    setMyStocks(myStocks => [...myStocks, addedStock])
  }

  function handleRemoveStock(removedStock) {
    setMyStocks(myStocks => myStocks.filter(stock => stock.id !== removedStock.id))
  }

  function handleToggleSort(e) {
    setSortBy(e.target.value)
  }

  function handleFilter(e) {
    setFilterBy(e.target.value)
  }

  return (
    <div>
      <SearchBar 
      sortBy={sortBy}
      handleToggleSort={handleToggleSort}
      handleFilter={handleFilter}
      filterBy={filterBy}/>
      <div className="row">
        <div className="col-8">
          <StockContainer 
          key={stocks.id}
          stocks={stocks}
          handleAddStock={handleAddStock}
          sortBy={sortBy}
          filterBy={filterBy}/>
        </div>
        <div className="col-4">
          <PortfolioContainer 
          myStocks={myStocks}
          handleRemoveStock={handleRemoveStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
