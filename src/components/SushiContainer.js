import React from "react";
import MoreButton from "./MoreButton";
import Sushi from"./Sushi";

function SushiContainer({items}) {
  console.log(items)
  const sushiItems = items.map(sushi => <Sushi OneSushi={sushi}  key={sushi.id} />)
  console.log(sushiItems)
  return (
    <div className="belt">
      {sushiItems}
      <MoreButton sushiItems={sushiItems}/>
    
    </div>
  );
}

export default SushiContainer;
