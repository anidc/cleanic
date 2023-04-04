import { redirect, Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


function PrivateRoute({ element: Component, ...rest }) {
    const { currentUser } = useAuth()
    return (
        <Route
            {...rest}
            render={props => {
                return currentUser ? <Component {...props} /> : redirect("/login")
            }}
        >

        </Route>
    )
}

export default PrivateRoute;