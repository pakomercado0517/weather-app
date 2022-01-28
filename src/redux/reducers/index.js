import { GET_COUNTRY, DELETE_COUNTRY } from "../actions/index";

const initialState = {
  cities: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRY:
      const resCity = action.payload.id;
      const findCity = state.cities.find((el) => el.id === resCity);
      const isCity = findCity === undefined ? false : true;
      return {
        ...state,
        cities: !isCity ? [...state.cities, action.payload] : [...state.cities],
      };
    case DELETE_COUNTRY:
      const id = action.payload;
      return {
        ...state,
        cities: [...state.cities.filter((el) => el.id !== id)],
      };
    default:
      return state;
  }
}

export default rootReducer;
