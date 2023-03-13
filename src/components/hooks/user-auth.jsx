import { useSelector } from "react-redux";

export function useAuth () {
    const {login} = useSelector(state => state.user.user)
    console.log(!!login)
    return {
        isAuth: !!login,
        login,
        
    }
}