import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';





const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const Location = useLocation()


    if (loading) {
        return <span className="loading loading-spinner loading-md "></span>
    }



    if (user) {
        return children;
    }

    return <Navigate state={Location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;