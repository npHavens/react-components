// TODO
class GroceryListItem extends React.Component {
  render() {
    return <li>{this.props.item}</li>;
  }
}

var GroceryList = (props) => {
    return <ul>{
      props.items.map((item, i) => {
        return <GroceryListItem item={item} key={i}/>
      })
    }</ul>
}


ReactDOM.render(<GroceryList items={['Beer', 'Food', 'Water']} />, document.getElementById("app"));

