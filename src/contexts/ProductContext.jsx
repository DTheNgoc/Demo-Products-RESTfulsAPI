// src/context/ProductContext.jsx
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const API_URL = 'https://my-fake-products-api.onrender.com/products';

const ProductContext = createContext();

const initialState = {
  products: [],
  loading: true,
  error: null,
};

function productReducer(state, action) {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload, loading: false };
    case 'ADD_PRODUCT':
      return { ...state, products: [...state.products, action.payload] };
    case 'DELETE_PRODUCT':
      return { ...state, products: state.products.filter(p => p.id !== action.payload) };
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        products: state.products.map(p =>
          p.id === action.payload.id ? action.payload : p
        ),
      };
    case 'SET_LOADING':
      return { ...state, loading: true };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, initialState);

  // Fetch initial data
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    dispatch({ type: 'SET_LOADING' });
    try {
      const res = await axios.get(API_URL);
      dispatch({ type: 'SET_PRODUCTS', payload: res.data });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }
  };

  const addProduct = async (product) => {
    try {
      const newProduct = {
        ...product,
        id: uuidv4(),
        image: "https://placehold.co/400x400/CCCCCC/333333?text=New-Product",
        category: "Mới",
      };
      const res = await axios.post(API_URL, newProduct);
      dispatch({ type: 'ADD_PRODUCT', payload: res.data });
    } catch (error) {
      console.error("Lỗi khi thêm mới", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      dispatch({ type: 'DELETE_PRODUCT', payload: id });
    } catch (error) {
      console.error("Lỗi khi xóa", error);
    }
  };

  const updateProduct = async (product) => {
    try {
      const res = await axios.put(`${API_URL}/${product.id}`, product);
      dispatch({ type: 'UPDATE_PRODUCT', payload: res.data });
    } catch (error) {
      console.error("Lỗi khi cập nhật", error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        loading: state.loading,
        error: state.error,
        addProduct,
        deleteProduct,
        updateProduct,
        fetchProducts
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}
