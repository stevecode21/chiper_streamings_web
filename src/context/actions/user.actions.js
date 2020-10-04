import { TYPES } from "../../constants/types";
import settings from "../../constants/settings";
const API = settings.API;
const HEADERS = settings.HEADERS;
export const loginUser = (user, dispatch, setError) => {
  console.log("hello");
  fetch(API + "users", {
    method: "POST",
    body: JSON.stringify(user),
    headers: HEADERS,
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.statusCode === 200) {
        console.log("response", response);
        const user = response.data;
        localStorage.setItem("user", user);
        dispatch(setCurrentUser(response.data, true));
        setError(null);
      } else {
        setError(response.error);
        console.log("error");
        logoutUser(dispatch);
      }
    })
    .catch((error) => {
      logoutUser(dispatch);
      console.log(error);
    });
};

export const setCurrentUser = (user, isAuthenticated) => {
  return {
    type: TYPES.SET_CURRENT_USER,
    payload: { user, isAuthenticated },
  };
};

export const logoutUser = (dispatch) => {
  dispatch(setCurrentUser({}, false));
};
