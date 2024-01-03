// userActions.js
import axios from "axios";
import toast from "react-hot-toast";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const FETCH_PRODUCT = "FETCH_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT"; 

export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const FETCH_PRODUCT_BY_ID = "FETCH_PRODUCT_BY_ID";

export const UPDATE_PRODUCT = "UPDATE_PRODUCT";


// update product actions
export const updateProductSuccess = (userData) => ({
  type: UPDATE_PRODUCT,
  payload: userData,
});

export const updateProduct = (productId,name,dateReceived,quantity,dateDispatched,dispatchQuantity,status) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');

      const response = await axios.post(`http://localhost:8000/api/updateProduct/${productId}`, {
        name,
        dateReceived,
        quantity,
        dateDispatched,
        dispatchQuantity,
        status
      },{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(updateProductSuccess(response.data));
      toast.success("Product Updated successfully");

      // Delay the navigation by 2 seconds
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (error) {
      console.log("register error", error);
      toast.error("Error while update product");
    }
  };
};




// fetch product by id product actions
export const fetchProductById = (productId) => {
  return async (dispatch) => {
    try {
      // Retrieve the token from local storage
      const token = localStorage.getItem('token');
      
      const response = await axios.get(`http://localhost:8000/api/fetchUserProduct/${productId}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
        dispatch({
        type: FETCH_PRODUCT_BY_ID,
        payload: response.data,
      });
      // toast.success("Product fetch successfully");

    } catch (error) {
      console.log("fetchUserProducterror", error);
      // toast.error("Error in fetching product");

    }
  };
};



// delete product actions
export const deleteProduct = (productId) => {
  return async (dispatch) => {
    try {
      // Retrieve the token from local storage
      const token = localStorage.getItem('token');
      
      const response = await axios.delete(`http://localhost:8000/api/deleteProduct/${productId}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
        dispatch({
        type: DELETE_PRODUCT,
        payload: response.data,
      });
      toast.success("Product deleted successfully");

    } catch (error) {
      console.log("deleteProducterror", error);
      toast.error("Error in deleting product");

    }
  };
};



// create product actions
export const createProductSuccess = (userData) => ({
  type: CREATE_PRODUCT,
  payload: userData,
});

export const createProduct = (name,dateReceived,quantity,dateDispatched,dispatchQuantity,status,qrcode) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');

      const response = await axios.post("http://localhost:8000/api/createProduct", {
        name,
        dateReceived,
        quantity,
        dateDispatched,
        dispatchQuantity,
        status,
        qrcode
      },{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(createProductSuccess(response.data));
      toast.success("Product created successfully");

      // Delay the navigation by 2 seconds
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (error) {
      console.log("register error", error);
      toast.error("Error in creating product");
    }
  };
};



// fetch product actions
export const fetchProduct = () => {
  return async (dispatch) => {
    try {
      // Retrieve the token from local storage
      const token = localStorage.getItem('token');
      
      const response = await axios.get("http://localhost:8000/api/fectProduct",{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
        dispatch({
        type: FETCH_PRODUCT,
        payload: response.data,
      });
    } catch (error) {
      console.log("fetchProducterror", error);
    }
  };
};






// LOGIN USER ACTION
export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });
      // Extract the token from the response
      const { token } = response.data;

      // Store the token in local storage
      localStorage.setItem("token", token);

      dispatch(loginSuccess(response.data));
      toast.success("login successfully");

      // Delay the navigation by 2 seconds
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (error) {
      console.log("register error", error);
      toast.error("Email and Password is invalid");
    }
  };
};

// REGISTER USER ACTIONS
export const registerSuccess = (userData) => ({
  type: REGISTER_SUCCESS,
  payload: userData,
});

export const registerUser = (name, email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:8000/api/register", {
        name,
        email,
        password,
      });
      dispatch(registerSuccess(response.data));
      toast.success("Registration successfully");

      // Delay the navigation by 2 seconds
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (error) {
      console.log("register error", error);
      toast.error("This userame and email id is already exist");
    }
  };
};
