export const initialState = {
    basket: []
};

function reducer(state, action) {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            //add to basket
            break;
        case 'REMOVE_FROM_BASKET':
            //remove basket 
            break;
        default:
            return state;
    }
}

export default reducer;