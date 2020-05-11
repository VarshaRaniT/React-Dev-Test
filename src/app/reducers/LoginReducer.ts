import { handleActions, Action } from "redux-actions";

import { LOGGED_IN, LOGGED_OUT } from "./../constant";
import { LoginFormState, LoginFormProps, LoginInitialState } from "./../models";

export default handleActions<LoginFormState, LoginFormProps>(
  {
    [LOGGED_IN]: (
      state: LoginFormState,
      actions: Action<LoginFormState>
    ): LoginFormState => {
      return {
        ...state,
        user: actions.payload!.user
      };
    },
    [LOGGED_OUT]: (): LoginFormState => {
      return {
        ...LoginInitialState
      };
    }
  },
  LoginInitialState
);
