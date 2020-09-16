import { TYPES } from "../../constants/types";

// import { isEmpty } from "../validations/isEmpty";

export default function (state, action) {
  switch (action.type) {
    case TYPES.SET_CURRENT_USER:
      return {
        ...state,
        // isAuthenticated: !isEmpty(action.payload),
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user,
      };
    default:
      return state;
  }
}
