import  {FunctionComponent, useContext, useEffect} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {privateRoutes_} from "./PrivateRoutes/privateRoutes_";
import PublicRoutes from "./PublicRoutes/publicRoutes";
import SystemRoutes from "./SystemRoutes";
import {Loading} from "../Pages/Loading";

interface MainRouterProps {
}


const MainRouter: FunctionComponent<MainRouterProps> = () => {


   

    let Routers = (
        <RouterProvider
            router={createBrowserRouter([
                {
                    path: "/",
                    element: (
                            <div/>
                    ),
                    children: privateRoutes_ ?? <Loading/>,
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
