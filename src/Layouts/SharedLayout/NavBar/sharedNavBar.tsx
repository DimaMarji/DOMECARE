import React, { FunctionComponent, useEffect, useState } from "react";
import "./styles.scss";
import { useAppMediaQuery } from "../../../Hooks/MediaQuery/use-app-media-query";
import LogoImage from "../../../public/Assets/Images/template/jobhub-logo.svg";
import { Image } from "antd";
import { Layout } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { Button , Text, Title} from "../../../Components";
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

interface SharedNavBarProps {
  setToggleMenu?: any;
  toggleMenu?: boolean;
}
const { Header } = Layout;
const SharedNavBar: FunctionComponent<SharedNavBarProps> = ({
  setToggleMenu,
  toggleMenu,
}) => {
  const { pathname: selected} = useLocation();
  const push=useNavigate()

 

  const { isMobileOrTablet } = useAppMediaQuery();

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
      icon={
        <CloseOutlined />
      }
    />
  );

  const menuItemsData = [
    {
      key: "/",
      label: "Home",
    },
    {
      key:  "/jobs-list",
      label: "Find a Job",
    }, {
      key: "/recruiters",
      label: "Recruiters",
    },  {
      key: "/about-us",
      label: "About Us"
  },
    {
      key: "/pricing",
      label: "Pricing",
    },
    {
      key: "/contact-us",
      label: "Contact Us",
    }, 
      {
        key: "/blogs",
        label: "Blog",
      },
  ];

  const menuItems = menuItemsData?.map((item, index) => {
    const isSelected =
      item.key === "/"
        ? selected === item.key
        : selected.startsWith(item.key);

    return (
      <>
    
          <Text
            key={index}
            className={
              isSelected
                ? "header-menu-item navbar-selected-item"
                : "header-menu-item navbar-not-selected-item"
            }
            onClick={(event) => {
              push(item.key);
              toggleNav(false, event);
            }}
            typographyFontColor={"#05264E"}
            typographyType={{
              size: "16px-18px-18px",
              type: "regular-semi-bold-semi-bold",
            }}
          >
            {item.label}
          </Text>
      
      </>
    );
  });

  const menu = (
    <>
      <div className={"header-space"}>{menuItems}</div>
      <Button
          type={"link"}
          className={"register-button"}
          onClick={(event) => {
            push("/ContactUs");
            toggleNav(false, event);
          }}
        >
          Register
        </Button>
        <Button
          type={"primary"}
          className={"sign-in-button"}
          onClick={(event) => {
            push("/ContactUs");
            toggleNav(false, event);
          }}
        >
          Sign In
        </Button>
        {/* <Select
        value={locale}
        options={[{ value:"en",label:"English"},{ value:"ar",label:"العربية"}]}
        onSelect={(value) =>switchLanguage(value)}
        style={{ padding: '8px', fontSize: '16px' ,minWidth:"100px"}}
      /> */}
       
    </>
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
              alt={"job-logo"}
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
