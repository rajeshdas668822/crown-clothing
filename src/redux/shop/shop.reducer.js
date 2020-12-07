import  SHOP_DATA from './shop.data.js'

const INTITAL_STATE = {
    collections: SHOP_DATA
};

 const shopReducer = (state = INTITAL_STATE, action) => {
    switch (action.type) {
       
        default:
            return state;
    }

};

export default shopReducer;

