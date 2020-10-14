import { TYPES } from "../../constants/types";
import settings from "../../constants/settings";
const API = settings.API;
const HEADERS = settings.HEADERS;

export const createRoom = async (name, dispatch) => {
  try {
    const response = await fetch(API, +`opentok/room/${name}`, {
      method: "GET",
      headers: HEADERS,
    });
    let data = response.json();
    dispatch({ type: TYPES.CREATE_SESSION_STREAMING, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const openOrCloseModal = (isOpen, dispatch) => {
  dispatch({ type: TYPES.OPEN_OR_CLOSE_MODAL, payload: isOpen });
};
