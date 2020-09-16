import { TYPES } from "../../constants/types";
import setting from "../../constants/settings";
const API = settings.API;
const HEADERS = settings.HEADERS;

export const createRoom = (name) => {
  fetch(API, +`opentok/room/${name}`, {});
};
