import { setIsAuthenticated, setToken, setUser } from "../states/authSlice";

export const checkLogin = () => async (dispatch) => {
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('user')
    if (token && user) {
        dispatch(setIsAuthenticated(true))
        dispatch(setToken(token))
        dispatch(setUser(JSON.parse(user)))
    }
}

export const logout = () => async (dispatch) => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    dispatch(setIsAuthenticated(false))
    dispatch(setToken(null))
    dispatch(setUser(null))
}