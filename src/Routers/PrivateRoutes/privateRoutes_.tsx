import { Outlet } from "react-router-dom";
import Login from "../../Pages/Login/loginContainer";
import { Breadcrumb } from "antd";
import Home from "../../Pages/Home/homeContainer";

const PrivateRoutes: any = [
  {
    path: "",
    element: (
      <>
        <Home />
      </>
    ),
  },
];
export default PrivateRoutes;
