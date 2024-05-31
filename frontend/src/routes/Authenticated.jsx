
import { useLocation, Navigate } from 'react-router-dom'

const Authenticated = ({children}) => {
    const location = useLocation();
    if (localStorage.getItem("access_token")) {
        return <div>{children}</div>;
    }
    else{
        
        return <Navigate to ='/login' state={{from:location}} replace></Navigate>;
    };
}

export default Authenticated;