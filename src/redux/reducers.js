
import products from "../data/products";

const ProductReducer = function (state = products, action) {
    switch (action.type) {
        case "REMOVE_PRODUCT":
            return [...state]; // write a logic to remove product

        case "ADD_PRODUCT":
            return [...state, action.product];

        case "LOAD_PRODUCTS":
            return [...state];

        default:
            return state;
    }
}

export default ProductReducer;