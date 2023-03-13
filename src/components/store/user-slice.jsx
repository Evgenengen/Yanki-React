const auth = {
  user: {
    login: null,
    password: null,
  },
}

export const userReducer = (state = auth, action) => {
  switch (action.type) {
    case "ADD_AUTH":
      const login = action.payload.login;
      const password = action.payload.password;
      console.log(state);
      return {
        ...state,
        user: {

          login,
          password,
        }
      };
    default:
      return state;
  }
};
