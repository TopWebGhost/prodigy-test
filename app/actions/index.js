import * as types from './types';
import axios from 'axios';

export function fetchProperties() {
  return function(dispatch) {
    dispatch({type: types.FETCH_PROPERTIES_START});
    axios.get('http://54.198.224.198/property')
      .then((response) =>{
        dispatch({type: types.FETCH_PROPERTIES_SUCCESS, payload: response.data.results});
      })
      .catch((err) => {
        dispatch({type: types.FETCH_PROPERTIES_ERROR, payload: err});
      });
  };
}

export function fetchProperty(id) {
  return function(dispatch) {
    dispatch({type: types.FETCH_PROPERTY_START});
    axios.get(`http://54.198.224.198/property/${id}`)
      .then((response) =>{
        dispatch({type: types.FETCH_PROPERTY_SUCCESS, payload: response.data.results[0]});
      })
      .catch((err) => {
        dispatch({type: types.FETCH_PROPERTY_ERROR, payload: err});
      });
  };
}
