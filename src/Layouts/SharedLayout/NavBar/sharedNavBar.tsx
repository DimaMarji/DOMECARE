import React, { FunctionComponent, useEffect, useState } from "react";
import "./styles.scss";
import { useAppMediaQuery } from "../../../Hooks/MediaQuery/use-app-media-query";
import LogoImage from "../../../assets/Images/Services/LOGO.webp";
import { Badge, Dropdown, Image, Space, Typography } from "antd";
import { Layout } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../../Components";
import {
  MenuOutlined,
  CloseOutlined,
  BellFilled,
  MessageFilled,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useCookies } from "react-cookie";
import SharedSidebar from "../Sidebar/sharedSidebar";

const { Text } = Typography;

interface SharedNavBarProps {
  setToggleMenu?: any;
  toggleMenu?: boolean;
}
const { Header } = Layout;
const SharedNavBar: FunctionComponent<SharedNavBarProps> = ({
  setToggleMenu,
  toggleMenu,
}) => {
  const push = useNavigate();

  const { isMobileOrTablet } = useAppMediaQuery();

  
  const [cookies,setCookie,removeCookie] = useCookies(['accessToken']);

  const toggleNav = (value: boolean, event: any) => {
    event.preventDefault();
    setToggleMenu(value);
  };

  const openMenu = (
    <Button
      onClick={(event: any) => toggleNav(true, event)}
      className="menu-button"
      type={"link"}
      icon={<MenuOutlined />}
    />
  );
  const closeMenu = (
    <Button
      onClick={(event: any) => toggleNav(false, event)}
      className="menu-button"
      type={"link"}
      icon={<CloseOutlined />}
    />
  );

  const menu = (isMobileOrTablet?<SharedSidebar/>:
    <div className="header-buttons">
      <Button type={"link"} className={"header-button"} disabled>
        <MessageFilled />
      </Button>
      <Button type={"link"} className={"header-button"}>
        <BellFilled />
      </Button>
      <Dropdown menu={{items:[{label:<Space onClick={()=>  removeCookie('accessToken')}><LogoutOutlined /><span>Logout</span></Space>,key:"logout"}]}}> 
      <Button type={"link"} className={"header-button"} >
        <UserOutlined />
      </Button>
      </Dropdown>
      {/* <Select
        value={locale}
        options={[{ value:"en",label:"English"},{ value:"ar",label:"العربية"}]}
        onSelect={(value) =>switchLanguage(value)}
        style={{ padding: '8px', fontSize: '16px' ,minWidth:"100px"}}
      /> */}
    </div>
  );

  const [isHydrated, setHydrated] = useState(false);

  //when the client-side hydration is complete set to true
  // to ensure that the initial server-rendered HTML matches the hydrated client-side
  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <>
      <Header
        id="job-nav"
        className={
          !toggleMenu || !isMobileOrTablet
            ? "header-container"
            : "header-container-menu-opened"
        }
      >
        <div className={"navbar-header"}>
          <Button
            type={"link"}
            onClick={(event) => {
              push("/");
              toggleNav(false, event);
            }}
            className={"logo-button"}
          >
            <Image
              preview={false}
              alt={"logo"}
              className={"logo-image"}
              src={LogoImage}
            />
          </Button>
          {isMobileOrTablet && (!toggleMenu ? openMenu : closeMenu)}
        </div>
        {(toggleMenu || !isMobileOrTablet) && isHydrated && menu}
      </Header>
    </>
  );
};

export default SharedNavBar;
