import axios from 'axios';

const GET_DATA_LOADING = 'GET_DATA_LOADING';
const GET_DATA = 'GET_DATA';

const defaultState = {
  namePicture: '',
  data: [],
  loading: false,
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_DATA_LOADING:
      return {
        ...state,
        namePicture: payload,
        loading: true,
      };
    case GET_DATA:
      return {
        ...state,
        namePicture: '',
        data: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const getLoading = (namePicture) => {
  return (dispatch) => {
    dispatch({ type: GET_DATA_LOADING, payload: namePicture });
    setTimeout(
      () =>
        axios.get('https://reqres.in/api/products/3').then((data) => {
          dispatch({ type: GET_DATA, payload: data.data });
        }),
      2000
    );
  };
};
