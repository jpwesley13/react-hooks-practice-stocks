import React from "react";

function Stock({stock, handleStock}) {
  const {id, ticker, name, type, price} = stock

  function handleClick(){
    handleStock({ //The callback on Stocks will know which it's talking about. I don't need to know if it's add/remove, the callback will attach it properly based on context.
      id, 
      name, 
      price, 
      type, 
      ticker}) //this is a shortcut to doing key: value pairing. As long as they have the same name, like name: name, id: id, price: price, etc I can just build my object like this.
  }

  return (
    <div>
      <div className="card"
      onClick={handleClick}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
