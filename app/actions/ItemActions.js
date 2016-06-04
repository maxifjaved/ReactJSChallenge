import alt from '../alt';

class ItemActions {
  constructor() {
    this.generateActions(
      'getItemSuccess',
      'getItemFail',
      'getViewDetails'
    );
  }

  getItem(itemId) {
    this.actions.getViewDetails(itemId);
  }
}

export default alt.createActions(ItemActions);