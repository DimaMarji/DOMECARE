import  {FunctionComponent} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes/privateRoutes_";
import PublicRoutes from "./PublicRoutes/publicRoutes";
import SystemRoutes from "./SystemRoutes";
import {Loading} from "../Pages/Loading";
import { SharedLayout } from "../Layouts/SharedLayout";
import Login from "../Pages/Login/loginContainer";

interface MainRouterProps {
}


const MainRouter: FunctionComponent<MainRouterProps> = () => {


   

    let Routers = (
        <RouterProvider
            router={createBrowserRouter([
                {
                    path: "/login",
                    element: (
                           <Login/>
                    ),
                 
                },
              
                {
                    path: "/",
                    element: (
                           <></>
                    ),
                    children: PrivateRoutes ?? <Loading/>,
                },
              
                {
                    path: "/",
                    element: <div/>,
                    children: PublicRoutes,
                },
                {
                    path: "/",
                    element: <div/>,
                    children: SystemRoutes,
                },
            ])}
        />
    );
    return <> {<>{Routers}</>}</>;
};

export default MainRouter;
