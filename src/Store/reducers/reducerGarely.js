import axios from 'axios';

const GET_GALERY = 'GET_GALERY';

const defaultState = {
  listGalery: {
    galery: [
      {
        namePicture: '',
        picture: '',
        price: '0',
        discount: '0',
        status: '',
      },
    ],
  },
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_GALERY:
      return {
        ...state,
        listGalery: payload,
      };
    default:
      return state;
  }
};

export const getGalery = () => (dispatch) => {
  axios.get('./data/data.json').then((galery) => {
    dispatch({ type: GET_GALERY, payload: galery.data });
  });
};
