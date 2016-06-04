import React from 'react';
import {Link} from 'react-router';
import ItemStore from '../stores/ItemStore';
import ItemActions from '../actions/ItemActions'

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = ItemStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    ItemStore.listen(this.onChange);
    ItemActions.getItem(this.props.params.id);
  }

  componentWillUnmount() {
    ItemStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div className='container'>
        <div className='profile-img'>  
            <img style={{paddingTop:7+'px',paddingLeft:8 +'px' , width:250 +'px',height:250 + 'px'}} src={this.state.image} />
        </div>
        <div className='profile-info clearfix' >
          <h2 className='text-danger'><strong>{this.state.name}</strong></h2>
          <h4 className='lead text-primary'>Price: <strong>{this.state.price}</strong></h4>
          <h4 className='lead text-warning'>Descripton: <strong>{this.state.description}</strong></h4>
        </div>

        <div className='profile-info clearfix btn btn-block btn-warning' >
        <Link to={'/'}>
          <h2 className='text-danger'><strong> &nbsp;&nbsp; Back To Store</strong></h2>
        </Link>
        </div>
        
      </div>
    );
  }
}

export default Item;