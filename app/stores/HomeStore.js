import alt from '../alt';
import HomeActions from '../actions/HomeActions';

class HomeStore {
  constructor() {
    this.bindActions(HomeActions);
    this.items = [];
  }

  onGetItemsSuccess(data) {
    this.items = data;
  }

  onGetItemsFail(jqXhr) {
    console.log(`onGetItemsFail ${jqXhr}`);
    toastr.error(jqXhr.responseJSON.message);
  }
  onGetItemsStatus(item){
    this.items.map((i)=>{
      if(i.itemId === item.itemId){
        if(i.status == 'ADD TO CART'){
          i.status = 'REMOVE FROM CART';
        }else if(i.status == 'REMOVE FROM CART'){
          i.status = 'ADD TO CART'
        }else{
          console.log('i am undefined');
        }
      }
    })
  }

  onGetItemsCheckout(){
    for(let i=0; i< this.items.length; i++){
      if(this.items[i].status === 'REMOVE FROM CART'){
         this.items.splice(i, 1);
         i--;
      }
    }
  }
} 

export default alt.createStore(HomeStore);