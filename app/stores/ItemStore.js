import {assign, contains} from 'underscore';
import alt from '../alt';
import ItemActions from '../actions/ItemActions';
import HomeStore from './HomeStore';

class ItemStore {
  constructor() {
    this.bindActions(ItemActions);
    this.itemId = 0;
    this.name = 'TBD';
    this.image = 'TBD';
    this.price = 0,
    this.description = 'TBD';
  }

  onGetViewDetails(id){
    let items = HomeStore.state.items;
    items.map((i)=>{
      if(i.itemId === id){
        this.itemId = i.itemId,
        this.name = i.name,
        this.image = i.image,
        this.price = i.price,
        this.description = i.description
      }
    });
  }

}

export default alt.createStore(ItemStore);