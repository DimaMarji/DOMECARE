import React, { FunctionComponent, useEffect, useState } from "react";
import "./styles.scss";
import { useAppMediaQuery } from "../../../Hooks/MediaQuery/use-app-media-query";
import { useRouter } from "next/router";
import Arrow from "../../../public/Assets/Icons/down-arrow.svg";
import Image from "next/image";
import MenuIcon from "../../../public/Assets/Icons/General/menu-icon.png";
import CloseIcon from "../../../public/Assets/Icons/General/close-icon.png";
import LogoImage from "../../../public/Assets/Images/template/jobhub-logo.svg";
import { Button } from "../../../Components/Atoms/Button";
import { Text } from "../../../Components/Atoms/Typography/Text";
import { Dropdown, Select, Space } from "antd";
import { Layout } from "antd";
import { useTranslation } from "next-i18next";

interface SharedNavBarProps {
  setToggleMenu?: any;
  toggleMenu?: boolean;
}
const { Header } = Layout;
const SharedNavBar: FunctionComponent<SharedNavBarProps> = ({
  setToggleMenu,
  toggleMenu,
}) => {
  const router = useRouter();
  const { push, asPath: selected ,locale} = useRouter();
  const { t } = useTranslation('common');

  const switchLanguage = (lang) => {
    router.push(router.pathname, router.asPath, { locale: lang });
  };

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
      icon={<Image alt={"menu-icon"} src={MenuIcon} />}
    />
  );
  const closeMenu = (
    <Button
      onClick={(event: any) => toggleNav(false, event)}
      className="menu-button"
      type={"link"}
      icon={
        <Image alt={"close-icon"} className={"close-icon"} src={CloseIcon} />
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
            push("/ContactUs", "/contact-us", { shallow: true });
            toggleNav(false, event);
          }}
        >
          Register
        </Button>
        <Button
          type={"primary"}
          className={"sign-in-button"}
          onClick={(event) => {
            push("/ContactUs", "/contact-us", { shallow: true });
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
      <style global jsx>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
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
              push("/", "/");
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
