import { Route, Navigate } from "react-router-dom";
import { userService } from "../service/user";
import { useNavigate } from "react-router-dom";

const SecuredRoute = ({children}) => {
    console.log(userService.get());
    return userService.get()==null ? <Navigate to='/admin' /> : children;
}

export default SecuredRoute;