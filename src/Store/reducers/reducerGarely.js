import axios from 'axios';

const GET_GALERY = 'GET_GALERY';
const ADD_LOADING = 'ADD_LOADING';
const GET_DATA = 'GET_DATA';

const defaultState = {
  galery: [],
  data: [],
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_GALERY:
      return {
        ...state,
        galery: payload.map((item) => ({ ...item, addLoading: false })),
      };
    case ADD_LOADING:
      return {
        ...state,
        galery: state.galery.map((item) => ({ ...item, addLoading: item.id === payload ? true : item.addLoading })),
      };
    case GET_DATA:
      return {
        ...state,
        galery: state.galery.map((item) => ({ ...item, addLoading: item.id === payload.id ? false : item.addLoading })),
        data: payload.data,
      };
    default:
      return state;
  }
};
export const addLoading = (id) => (dispatch) => {
  dispatch({ type: ADD_LOADING, payload: id });
  axios.get('https://jsonplaceholder.typicode.com/posts/1').then(
    setTimeout((res) => {
      dispatch({ type: GET_DATA, payload: { id, data: res } });
    }, 1500)
  );
};
export const getGalery = () => (dispatch) => {
  axios.get('./data/data.json').then((res) => {
    dispatch({ type: GET_GALERY, payload: res.data.galery });
  });
};
