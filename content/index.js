import React, { Component } from "react";
import { render } from "react-dom";
import BootstrapTable from 'react-bootstrap-table-next';
import "./style.css";

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
        if (error) {
          throw error
        }
      });
      setItems(data);
      console.log(data);
    }
    fetchData();
  }, []);
render(
  return (
    <div class="container">
      <BootstrapTable keyField='id' data={ items } columns={ columns } />
    </div>
  );
)
};
