// routes doesn't need login
import {RouteObject} from "react-router-dom";
import Login from "../../Pages/Login/loginContainer";



const PublicRoutes: RouteObject[] = [

    {
        path: "/login",
        element: <Login />,
      },
  
];

export default PublicRoutes;