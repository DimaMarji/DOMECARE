import { Outlet } from "react-router-dom";
import Login from "../../Pages/Login/loginContainer";
import { Breadcrumb } from "antd";

const PrivateRoutes: any = [
  {
    path: "",
    element: (
      <>
        <Outlet />
      </>
    ),
  },
];
export default PrivateRoutes;
