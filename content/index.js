const React = require('React');
const Component = React.Component();
const Reactdom = require('react-dom');
const render = Reactdom.render();
const reactbootstraptable = require('react-bootstrap-table-next');
const BootstrapTable = reactbootstraptable.BootstrapTable();

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
return(
    <div class="container">
      <BootstrapTable keyField='id' data={ items } columns={ columns }/>
    </div>
  );
}
render(<App />, document.getElementById("root"));
