import { Avatar, Image, Layout, Menu, Space } from "antd";
import "./styles.scss";
import { siderItems } from "./constants";
import { useSelector } from "react-redux";
import { LogoutOutlined } from "@ant-design/icons";
import { useCookies } from "react-cookie";


const { Sider } = Layout;

const SharedSidebar: React.FC = () => {


  const userData = useSelector((state) => state.auth.user);

  console.log(userData)
  
  const [cookies,setCookie,removeCookie] = useCookies(['accessToken']);

  return (
    <Sider theme="light" className="layout-sider">
      <Menu
      className="sider-menu"
        theme="light"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={siderItems(userData)}
      />
      <Space className="logout-space" onClick={()=>  removeCookie('accessToken')}><LogoutOutlined /><span>Logout</span></Space>
    </Sider>
  );
};

export default SharedSidebar;
