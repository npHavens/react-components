// TODO
var GroceryList = () => (
    <ul>
      <Food />
      <Beer />
    </ul>
  );


var Food = () => (
  <li>Food</li>
);

var Beer = () => (
  <li>Beer</li>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));
