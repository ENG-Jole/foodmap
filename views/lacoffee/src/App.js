import React from "react";
import { Card } from "antd";
import "./App.css";

const gridStyle = {
  width: "25%",
  textAlign: "center"
};

const apiUrl = "http://food.engjole.net/lacoffee";

function App() {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      var data = await fetch(apiUrl).then(res => {
        return res.json();
      });
      setItems(data);
      console.log(data);
    }
    fetchData();
  }, []);
  return (
    <div>
      {items.map(item => (
        <Card title={item.name} key={item.id}>
          <Card.Grid style={gridStyle}>{item.neighborhood1}</Card.Grid>
          <Card.Grid style={gridStyle}>{item.neighborhood2}</Card.Grid>
          <Card.Grid style={gridStyle}>{item.neighborhood3}</Card.Grid>
          <Card.Grid style={gridStyle}>{item.neighborhood4}</Card.Grid>
        </Card>
      ))}
      </div>
  );
}
export default App;
