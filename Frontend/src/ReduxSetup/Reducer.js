import { REGISTER_SUCCESS } from "../ReduxSetup/Action";
import { LOGIN_SUCCESS } from "../ReduxSetup/Action";
import { FETCH_PRODUCT } from "../ReduxSetup/Action";
import { CREATE_PRODUCT } from "../ReduxSetup/Action";
import { DELETE_PRODUCT } from "../ReduxSetup/Action";
import { FETCH_PRODUCT_BY_ID } from "../ReduxSetup/Action";
import { UPDATE_PRODUCT } from "../ReduxSetup/Action";


// create product reducer
const initialState6 = {
  product:null
};

export const updateProductReducer = (state = initialState6, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT:
      return { ...state, product: action.payload };
    default:
      return state;
  }
};



    // fetch by product id product API
    const initialState5 = {
        product:null
    };
    
    export const fetchProductByIdReducer = (state = initialState5, action) => {
        switch (action.type) {
        case FETCH_PRODUCT_BY_ID:
            return { ...state, product: action.payload };
        default:
            return state;
        }
    };


    // delete product API
    const initialState4 = {
        product:null
    };
    
    export const deleteProductReducer = (state = initialState4, action) => {
        switch (action.type) {
        case DELETE_PRODUCT:
            return { ...state, product: action.payload };
        default:
            return state;
        }
    };


// create product reducer
const initialState3 = {
    product:null
  };
  
 export const createProductReducer = (state = initialState3, action) => {
    switch (action.type) {
      case CREATE_PRODUCT:
        return { ...state, product: action.payload };
      default:
        return state;
    }
  };


//fetch product reducer
const initialState2 = {
    products: []
  };
  
 export const fetchProductReducer = (state = initialState2, action) => {
    switch (action.type) {
      case FETCH_PRODUCT:
        return { ...state, products: action.payload, };
      default:
        return state;
    }
  };



// login reducers
const initialState1 = {
    user: null,
    error: null
  };
  
 export const LoginReducer = (state = initialState1, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return { ...state, user: action.payload.user };
      default:
        return state;
    }
  };

// register reducer
const initialState = {
    user: null,
    error: null
  };
  
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_SUCCESS:
        return { ...state, user: action.payload.user };
      default:
        return state;
    }
  };
  

