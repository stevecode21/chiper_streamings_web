import { TYPES } from "../../constants/types";
import settings from "../../constants/settings";
const API = settings.API;
const HEADERS = settings.HEADERS;

export const createRoom = (name) => {
  fetch(API, +`opentok/room/${name}`, {});
};

export const openOrCloseModal = (isOpen, dispatch) => {
  dispatch({ type: TYPES.OPEN_OR_CLOSE_MODAL, payload: isOpen });
};
