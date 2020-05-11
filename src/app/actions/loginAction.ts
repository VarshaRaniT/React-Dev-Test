import { createAction } from "redux-actions";
import { LOGGED_IN, LOGGED_OUT } from "./../constant/login";
export const loggedIn = createAction(LOGGED_IN, (user: string) => ({
  user
}));
export const loggedOut = createAction(LOGGED_OUT, () => {});
