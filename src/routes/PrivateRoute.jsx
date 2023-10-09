import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const{user , loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <span className="loading loading-bars loading-lg ml-10 md:ml-32 mt-32"></span>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to = '/Login'></Navigate>;
};

export default PrivateRoute;