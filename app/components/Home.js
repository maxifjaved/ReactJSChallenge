import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore'
import HomeActions from '../actions/HomeActions';
import {first, without, findWhere} from 'underscore';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);
  }
  componentWillMount() {
    HomeStore.listen(this.onChange);
    this.state = HomeActions.getItems();
     
  }

  componentDidMount() {
    HomeStore.listen(this.onChange);
  }

  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    let itemList = this.state.items.map((item, index) => {
      return (
        <div key={item.itemId} className='list-group-item animated fadeIn'>
          <div className='media'>
            <span className='position pull-left'>{index + 1}</span>
            <div className='pull-left thumb-lg'>
              <Link to={'/items/' + item.itemId}>
                <img className='media-object' src={ item.image } />
              </Link>
            </div>
            <div className='media-body'>
              <h4 className='media-heading'>
                <Link to={'/items/' + item.itemId}>{item.name}</Link>
              </h4>
              <small>Price: <strong>{item.price}</strong></small>
              <br />
              <small>Description: <strong>{item.description}</strong></small>
              <br />
             <button className='btn btn-info'
                  onClick={HomeActions.status.bind(this,item)}>
                    { item.status }
              </button>

            </div>

          </div>
        </div>
      );
    });

    return (
      <div className='container'>
        <div className='btn btn-block btn-success'
          onClick={HomeActions.checkout.bind(this)}>
          Checkout
        </div>
        <div className='list-group'>
          {itemList}
        </div>
      </div>
    );
  }
}

export default Home;