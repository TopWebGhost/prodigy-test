import { combineReducers } from 'redux';
import * as types from '../actions/types';

const initialState = {
  properties: [],
  currentProperty: {},
  fetching: false,
  fetched: false,
  error: null
};

const property = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PROPERTIES_START:
      return {
        ...state,
        fetching: true
      };
    case types.FETCH_PROPERTIES_SUCCESS:
      return {
        ...state,
        fetching: false,
        fetched: true,
        properties: action.payload
      };
    case types.FETCH_PROPERTIES_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case types.FETCH_PROPERTY_START:
      return {
        ...state,
        fetching: true
      };
    case types.FETCH_PROPERTY_SUCCESS:
      return {
        ...state,
        fetching: false,
        currentProperty: action.payload
      };
    case types.FETCH_PROPERTY_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  property
});

export default rootReducer;
