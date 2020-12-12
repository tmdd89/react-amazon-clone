export const initialState = {
    basket: [],
    user:null
}

function reducer(state, action) {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            //add to basket
            return { 
              ...state,
              basket: [...state.basket, action.item] 
            };            
        case 'REMOVE_FROM_BASKET':
            //remove basket 
           return { state }
        default:
            return state;
    }
}

export default reducer;