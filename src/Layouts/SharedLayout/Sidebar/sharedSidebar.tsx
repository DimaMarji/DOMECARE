import { Avatar, Image, Layout, Menu, Space } from "antd";
import "./styles.scss";
import { siderItems } from "./constants";


const { Sider } = Layout;

const SharedSidebar: React.FC = () => {




  return (
    <Sider theme="light" className="layout-sider">
      <Menu
      className="sider-menu"
        theme="light"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={siderItems}
      />
    </Sider>
  );
};

export default SharedSidebar;
