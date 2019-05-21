const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "Login Failed"
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        authError: null
      };
    case "SIGNOUT_SUCESS":
      return {
        ...state,
        authError: null
      };
    case "LOGOUT_ERROR":
      return {
        ...state,
        authError: "Log out failed"
      };
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_ERROR":
      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
};

export default authReducer;
