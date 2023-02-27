
const initState = {
    email: null,
    token: null,
    id: null,
}

const userSlice = createSlice({
    name: 'user',
    initState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email
            state.token = action.payload.token
            state.id = action.payload.id
        },
        removeUser(state) {
            state.email = null
            state.token = null
            state.id = null
         }
    }
})
