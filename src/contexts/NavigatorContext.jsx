import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, API } from "../utils/consts";
import axios from "axios";

const navigatorContext = createContext();

export function useNavigatorContext() {
  return useContext(navigatorContext);
}

const init = {
  places: [],
  place: null,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.places:
      return { ...state, places: action.payload };

    case ACTIONS.place:
      return { ...state, place: action.payload };

    default:
      return state;
  }
}

const NavigatorContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, init);

  async function getPlaces() {
    try {
      const { data } = await axios.get(API);

      dispatch({
        type: ACTIONS.places,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function removePlace(id) {
    try {
      await axios.delete(`${API}/${id}`);
      getPlaces();
    } catch (e) {
      console.log(e);
    }
  }

  async function getOnePlace(id) {
    try {
      const { data } = await axios.get(`${API}/${id}`);
      dispatch({
        type: ACTIONS.place,
        payload: data,
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function updatePlace(id, newData) {
    try {
      await axios.patch(`${API}/${id}`, newData);
    } catch (e) {
      console.log(e);
    }
  }

  async function addPlace(newPlace) {
    try {
      await axios.post(API, newPlace);
    } catch (error) {
      console.log(error);
    }
  }

  const value = {
    places: state.places,
    place: state.place,
    getPlaces,
    addPlace,
    removePlace,
    getOnePlace,
    updatePlace,
  };
  return (
    <navigatorContext.Provider value={value}>
      {children}
    </navigatorContext.Provider>
  );
};

export default NavigatorContext;
