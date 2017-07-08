// TODO
var GroceryListItem = (props) => {
  return <li>{props.item}</li>;
}

class GroceryList extends React.Component{
  render() {
    return <ul>{
      this.props.items.map((item, i) => {
        return <GroceryListItem item={item} key={i}/>
      })
    }</ul>
  }
}


ReactDOM.render(<GroceryList items={['Beer', 'Food', 'Water']} />, document.getElementById("app"));

