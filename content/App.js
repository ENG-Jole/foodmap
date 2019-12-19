<<<<<<< HEAD
=======
/*
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
>>>>>>> 225dbe5d11796afc36e301786cb66bb2a1a4352a
import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const apiUrl = "http://food.engjole.net/labreak";

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
<<<<<<< HEAD
=======
          //console.log(data);
>>>>>>> 225dbe5d11796afc36e301786cb66bb2a1a4352a
          setItems(data);
          console.log(data);
        }
        fetchData();
      }, []);
return(
    <div class="container">
      <BootstrapTable keyField='id' data={ items } columns={ columns }/>
    </div>
  );
}
export default App;
<<<<<<< HEAD
=======
//render(<App />, document.getElementById("root"));
>>>>>>> 225dbe5d11796afc36e301786cb66bb2a1a4352a
