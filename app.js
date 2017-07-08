// TODO
class GroceryListItem extends React.Component {
  constructor() {
    super();

    this.state = {
      done: false
    };
  }

  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style  = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.item}</li>;
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

