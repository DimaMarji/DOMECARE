import { FunctionComponent } from "react";
import { createBrowserRouter, Link, Outlet, RouterProvider, useLocation } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes/privateRoutes_";
import PublicRoutes from "./PublicRoutes/publicRoutes";
import SystemRoutes from "./SystemRoutes";
import { Loading } from "../Pages/Loading";
import { SharedLayout } from "../Layouts/SharedLayout";
import Login from "../Pages/Login/loginContainer";
import SharedLayoutContainer from "../Layouts/SharedLayout/sharedLayoutContainer";
import { Breadcrumb } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined, DoubleRightOutlined, HomeFilled, HomeOutlined } from "@ant-design/icons";

interface MainRouterProps {}

const MainRouter: FunctionComponent<MainRouterProps> = () => {
  
  const GenerateCrumb=() =>{
    const paths = window.location.pathname.split("/").slice(1);
    return (
        <Breadcrumb separator={<DoubleRightOutlined />}>
            <Breadcrumb.Item>
                <Link to="/" style={{color:"#3b86ff"}}><HomeFilled  className="home-icon"/>Home</Link>
            </Breadcrumb.Item>
            {paths.map((path, index) => {
                return (
                    <>
                        <Breadcrumb.Item key={index}>
                            <Link to={`/${paths.slice(0, index + 1).join("/")}`}>
                                {path.charAt(0).toUpperCase() + path.slice(1)}
                            </Link>
                        </Breadcrumb.Item>
                    </>
                );
            })}
        </Breadcrumb>
    );
}

  let Routers = (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: (
            <SharedLayoutContainer>
               {GenerateCrumb()}
              <Outlet />
            </SharedLayoutContainer>
          ),
          children: PrivateRoutes ?? <Loading />,
        },

        {
          path: "/",
          element: <Outlet />,
          children: PublicRoutes,
        },
        {
          path: "/",
          element: <div />,
          children: SystemRoutes,
        },
      ])}
    />
  );
  return <> {<>{Routers}</>}</>;
};

export default MainRouter;
