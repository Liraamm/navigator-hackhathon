import React, { createContext, useContext, useReducer, useState } from "react";
import { ACTIONS, API, LIMIT } from "../utils/consts";
import axios from "axios";
import { notify } from "../components/Toastify";
import { useSearchParams } from "react-router-dom";

const navigatorContext = createContext();

export function useNavigatorContext() {
  return useContext(navigatorContext);
}

const init = {
  places: [],
  place: null,
  pageTotalCount: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.places:
      return { ...state, places: action.payload };

    case ACTIONS.place:
      return { ...state, place: action.payload };

    case ACTIONS.pageTotalCount:
      return { ...state, pageTotalCount: action.payload };

    default:
      return state;
  }
}

const NavigatorContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, init);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(+searchParams.get("_page") || 1);

  async function getPlaces() {
    try {
      const { data, headers } = await axios.get(
        `${API}${window.location.search}`
      );

      const totalCount = Math.ceil(headers["x-total-count"] / LIMIT);

      dispatch({
        type: ACTIONS.pageTotalCount,
        payload: totalCount,
      });


      dispatch({
        type: ACTIONS.places,
        payload: data,
      });
    } catch (e) {
      notify(`${e.response.status}: ${e.response.statusText}`, "error");
    }
  }

  async function removePlace(id) {
    try {
      await axios.delete(`${API}/${id}`);
      getPlaces();
      notify("Success");
    } catch (e) {
      notify(`${e.response.status}: ${e.response.statusText}`, "error");
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
      notify(`${e.response.status}: ${e.response.statusText}`, "error");
    }
  }

  async function updatePlace(id, newData) {
    try {
      await axios.patch(`${API}/${id}`, newData);
      notify("Success Update");
    } catch (e) {
      notify(`${e.response.status}: ${e.response.statusText}`, "error");
    }
  }

  async function addPlace(newPlace) {
    try {
      await axios.post(API, newPlace);
      notify("Place added successfully");
    } catch (e) {
      notify(`${e.response.status}: ${e.response.statusText}`, "error");
    }
  }

  const value = {
    places: state.places,
    place: state.place,
    pageTotalCount: state.pageTotalCount,
    page,
    setPage,
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
