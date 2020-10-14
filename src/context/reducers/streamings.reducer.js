import { TYPES } from "../../constants/types";

export default function (state, action) {
  switch (action.type) {
    case TYPES.OPEN_OR_CLOSE_MODAL:
      return {
        ...state,
        modalIsOpen: action.payload,
      };
    case TYPES.CREATE_SESSION_STREAMING:
      return {
        ...state,
        streamingData: action.payload.data,
      };
    default:
      return state;
  }
}
