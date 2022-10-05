import store from "../redux/store";

export const getCartIndex = (id) => {
    const cartItems = store.getState().cart.cartItems;
    return cartItems.findIndex((item) => item.id === id);
}