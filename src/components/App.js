
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import React, { useEffect, useState } from "react";

const API = "http://localhost:3001/sushis";

function App() {
  const [items,setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/sushis")
      .then((r) => r.json())
      .then((items) => setItems(items));
  }, []);


  return (
    <div className="app">
      <SushiContainer items={items} />
      <Table />
    </div>
  );
}

export default App;
