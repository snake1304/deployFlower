import {
  ALL_CATE_FAIL,
  ALL_CATE_REQUEST,
  ALL_CATE_SUCCESS,
  CREATE_CATE_FAIL,
  CREATE_CATE_REQUEST,
  CREATE_CATE_SUCCESS,
  CREATE_CATE_RESET,
  UPDATE_CATE_FAIL,
  UPDATE_CATE_REQUEST,
  UPDATE_CATE_RESET,
  UPDATE_CATE_SUCCESS,
  DELETE_CATE_FAIL,
  DELETE_CATE_REQUEST,
  DELETE_CATE_RESET,
  DELETE_CATE_SUCCESS,
  SINGLE_CATE_FAIL,
  SINGLE_CATE_REQUEST,
  SINGLE_CATE_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/categoryConstants";

export const allCategoryReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case ALL_CATE_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ALL_CATE_SUCCESS:
      return {
        loading: false,
        categories: action.payload.categories,
      };

    case ALL_CATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const newCategoryReducer = (state = { category: {} }, action) => {
  switch (action.type) {
    case CREATE_CATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_CATE_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        product: action.payload,
      };
    case CREATE_CATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_CATE_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CATE_REQUEST:
    case UPDATE_CATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CATE_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_CATE_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case DELETE_CATE_FAIL:
    case UPDATE_CATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_CATE_RESET:
      return {
        ...state,
        isDeleted: false,
      };
    case UPDATE_CATE_RESET:
      return {
        ...state,
        isUpdated: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const singleCategoryReducer = (state = { category: {} }, action) => {
  switch (action.type) {
    case SINGLE_CATE_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case SINGLE_CATE_SUCCESS:
      return {
        loading: false,
        category: action.payload,
      };
    case SINGLE_CATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
