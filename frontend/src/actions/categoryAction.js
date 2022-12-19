import {
  ALL_CATE_FAIL,
  ALL_CATE_REQUEST,
  ALL_CATE_SUCCESS,
  CREATE_CATE_FAIL,
  CREATE_CATE_REQUEST,
  CREATE_CATE_SUCCESS,
  UPDATE_CATE_FAIL,
  UPDATE_CATE_REQUEST,
  UPDATE_CATE_SUCCESS,
  DELETE_CATE_FAIL,
  DELETE_CATE_REQUEST,
  DELETE_CATE_SUCCESS,
  SINGLE_CATE_FAIL,
  SINGLE_CATE_REQUEST,
  SINGLE_CATE_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/categoryConstants";
import axios from "axios";

// get All Categories
export const getAllCategories = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_CATE_REQUEST });
    const { data } = await axios.get(`/api/v1/categories`);

    dispatch({ type: ALL_CATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ALL_CATE_FAIL, payload: error.response.data.message });
  }
};

// Get Category Details
export const getSingleCategory = (id) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_CATE_REQUEST });

    const { data } = await axios.get(`/api/v1/category/${id}`);

    dispatch({
      type: SINGLE_CATE_SUCCESS,
      payload: data.category.categoryName,
    });
  } catch (error) {
    dispatch({
      type: SINGLE_CATE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create Category
export const createCategory = (categoryData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_CATE_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/category/new`,
      categoryData,
      config
    );

    dispatch({
      type: CREATE_CATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_CATE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Category
export const updateCategory = (id, categoryData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_CATE_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/admin/category/${id}`,
      categoryData,
      config
    );

    dispatch({
      type: UPDATE_CATE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_CATE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Category
export const deleteCategory = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CATE_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/category/${id}`);

    dispatch({
      type: DELETE_CATE_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_CATE_FAIL,
      payload: error.response.data.message,
    });
  }
};
//Clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
