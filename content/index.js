import React, { Component } from "react";
import { render } from "react-dom";
import BootstrapTable from 'react-bootstrap-table-next';

const apiUrl = "https://food.engjole.net/labreak";

function App() {
  const [items, setItems] = React.useState([]);
  const columns = [{
    dataField: 'id',
    text: 'Restaurant ID'
    }, {
    dataField: 'name',
    text: 'Restaurant Name'
    }, {
    dataField: 'pricerange',
    text: 'Price'
    }];
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
    <div class="container">
      <BootstrapTable keyField='id' data={ items } columns={ columns } />
    </div>
  );
}

render(<App />, document.getElementById("root"));
