// TODO
class GroceryListItem extends React.Component {
  render() {
    return (<li>{this.props.item}</li>);
  }
}

class GroceryList extends React.Component{
  render() {
    return (<ul>{
      this.props.items.map((item, i) => {
        return <GroceryListItem item={item} key={i}/>
      })
    }</ul>)
  }
}


ReactDOM.render(<GroceryList items={['Beer', 'Food', 'Water']} />, document.getElementById("app"));

