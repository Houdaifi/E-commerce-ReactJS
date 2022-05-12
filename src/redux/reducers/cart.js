export default reducer = (cart = [], action) => {
    switch (action.type) {
        case 'GET_CART':
            return cart;
        case 'UPDATE_CART':
            return cart;
        case 'DELETE_CART':
            return cart
        default:
            throw new Error();
    }
} 