
import Error404 from "../../Pages/Error404";
import {RouteObject} from "react-router-dom";
import YouAreOffline from "../../Pages/YouAreOffline/youAreOfflineContainer";
import Error403 from "../../Pages/Error403";


const SystemRoutes: RouteObject[] = [
    // login
    {path: "login", element: <h1>login</h1>},

    //Errors
    {path: "*", element: <Error404/>},
    {path: "404", element: <Error404/>},
    {path: "403", element: <Error403/>},
    {path: "500", element: <h1>500</h1>},
    {path: "502", element: <h1>502</h1>},

    {path: "offline", element: <YouAreOffline/>},


];
export default SystemRoutes;
