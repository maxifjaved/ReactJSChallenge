import React from 'react';
import {Link} from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = NavbarStore.getState();
  }
  
  render() {
    return (
      <nav className='navbar navbar-default navbar-static-top'>
        <div className='navbar-header'>
          <Link to='/' className='navbar-brand'>
            Muhammad Asif Javed
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;