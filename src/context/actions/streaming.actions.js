import { TYPES } from "../../constants/types";
import settings from "../../constants/settings";
const API = settings.API;
const HEADERS = settings.HEADERS;

export const createRoom = async (name) => {
  try {
    const response = await fetch(API, +`opentok/room/${name}`, {});
  } catch (error) {
    console.log(error);
  }
};

export const openOrCloseModal = (isOpen, dispatch) => {
  dispatch({ type: TYPES.OPEN_OR_CLOSE_MODAL, payload: isOpen });
};
