import React, {FunctionComponent, useEffect, useState} from "react";
import SharedNavBar from "./NavBar";
import "./style.scss"
import {useAppMediaQuery} from "../../Hooks/MediaQuery/use-app-media-query";
import {Layout as AntdLayout} from "antd";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import SharedSidebar from "./Sidebar/sharedSidebar";

const {Content}= AntdLayout
const SharedLayout: FunctionComponent<any> = (props) => {

    const [toggleMenu, setToggleMenu] = useState<boolean>(false)
    const push = useNavigate()

    const{isMobileOrTablet}=useAppMediaQuery()
    const [cookies] = useCookies(['accessToken']);
useEffect(()=>{
if(!cookies?.accessToken){
    push("/login")
}
},[cookies?.accessToken])
    

    const Layout = <div className={`layout-header-parent-container`}>

        <div className="layout-header-parent">

            <div className="layout-header">
                <SharedNavBar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
            </div>
        </div>
    </div>

    return (
        <>

            <div className={`layout-container`}>
               {Layout}
                <div
                     style={toggleMenu ? {display: "none"} : {}} className="layout-content">
                        <AntdLayout>
                        <SharedSidebar/>

                        <AntdLayout style={{ padding: '0 24px 24px' }}>
         
          <Content
            style={{
              padding:" 0 24px",
              margin: 0,
              minHeight: 280,
              background: "transparent",
            }}
          >
             <div className="page-container">
                            {props.children}
                    </div>
          </Content>
        </AntdLayout>
        </AntdLayout>

                  
                </div>
            </div>


        </>
    );
};

export default SharedLayout;
