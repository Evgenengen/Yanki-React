const auth = {
  login: '343@mail.ru',
  password: 1234,
};

 export const userReducer = (state = auth, action) => {
  switch (action.type) {
    case 'ADD_AUTH':
      console.log(action.payload)
      return state
    default: return state
  }
};

