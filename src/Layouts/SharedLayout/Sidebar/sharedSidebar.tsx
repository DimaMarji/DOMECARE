import { Avatar, Image, Layout, Menu, Space } from "antd";
import "./styles.scss";
import { siderItems } from "./constants";
import { useSelector } from "react-redux";


const { Sider } = Layout;

const SharedSidebar: React.FC = () => {


  const userData = useSelector((state) => state.auth.user);

  console.log(userData)

  return (
    <Sider theme="light" className="layout-sider">
      <Menu
      className="sider-menu"
        theme="light"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={siderItems(userData)}
      />
    </Sider>
  );
};

export default SharedSidebar;
