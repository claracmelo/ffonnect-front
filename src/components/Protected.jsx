import { Navigate } from "react-router-dom";

const UserProtected = ({children,user})=>{
    if(!user){
        return <Navigate to="/login"/>
    }else{
        return children
    }
}

export default UserProtected;