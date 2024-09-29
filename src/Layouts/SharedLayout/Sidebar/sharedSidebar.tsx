import { Avatar, Image, Layout, Menu, Space } from "antd";
import "./styles.scss";
import { siderItems } from "./constants";
import { useSelector } from "react-redux";
import { LogoutOutlined } from "@ant-design/icons";
import { useCookies } from "react-cookie";
import { useAppMediaQuery } from "../../../Hooks/MediaQuery/use-app-media-query";
import { useLocation } from "react-router-dom";


const { Sider } = Layout;

const SharedSidebar: React.FC = () => {

  const userData = useSelector((state) => state.auth.user);
const {pathname}=useLocation()
console.log(pathname)
  
  const [cookies,setCookie,removeCookie] = useCookies(['accessToken']);
  const isSelected =(item)=>
  item.key === "/"
    ? selected === item.key
    : selected.startsWith(item.key);

  return (
    <Sider theme="light" className="layout-sider">
      <Menu
      className="sider-menu"
        theme="light"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={siderItems(userData,pathname)}
      />
      <Space className="logout-space" onClick={()=>  removeCookie('accessToken')}><LogoutOutlined /><span>Logout</span></Space>
    </Sider>
  );
};

export default SharedSidebar;
