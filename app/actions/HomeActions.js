import alt from '../alt';
import faker from 'faker';

class HomeActions {
  constructor() {
    this.generateActions(
    	'getItemsSuccess',
      'getItemsFail',
      'getItemsStatus',
      'getItemsCheckout',
      'getItemToView'

    );
  }


  status(item) {
    console.log(item.status);
    this.actions.getItemsStatus(item);
  }
  checkout(){
    this.actions.getItemsCheckout();
  }
  view(id){
    console.log('view the item',id);
  }

  getItems(){
    const PRODUCT_COUNT = 10;
    const products = [];
    let item = null;
    for (let i = 0; i < PRODUCT_COUNT; i++) {
      item = {
        itemId: faker.random.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.image(),
        description: faker.lorem.sentence(),
        status:'ADD TO CART',
      };
      products.push(item);
    }
    this.actions.getItemsSuccess(products);
  }

}

export default alt.createActions(HomeActions);