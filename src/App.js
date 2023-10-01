import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Component } from 'react';
import Counter from './Counter';
import Menu from './Component/Menu';
import Hello from './Hello';
import HelloAsClass from './HelloAsClass';
import { DISHES } from './shared/dishes';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return(<section>
     <Menu dishes={this.state.dishes} > </Menu>
     
     </section>);
    
  }
  
}

export default App;
