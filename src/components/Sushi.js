
import React, { useEffect, useState } from "react";

function Sushi({OneSushi}) {
  const [visible,setVisible] = useState(false);

  function handleNumberVisible() {
    
    if (visible >= 0 && visible <= 5) {
      setVisible(visible);
    }
  }
  console.log(OneSushi);
  return (
    <div className="sushi">
      <div className="plate" onClick={/* Give me a callback! */ null}>
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : (
          <img
            src={OneSushi.img_url}
            alt={OneSushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {OneSushi.name} - ${OneSushi.price}
      </h4>
      {OneSushi.name} {OneSushi.price}
    </div>
  );
}

export default Sushi;
