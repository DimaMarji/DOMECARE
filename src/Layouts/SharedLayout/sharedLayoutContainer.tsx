import React, {FunctionComponent, useEffect, useState} from "react";
import SharedNavBar from "./NavBar";
import "./style.scss"
import SharedFooter from "./Footer";
import {useAppMediaQuery} from "../../Hooks/MediaQuery/use-app-media-query";
import {Affix} from "antd";
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from "react-router-dom";


const SharedLayout: FunctionComponent<any> = (props) => {

    const [toggleMenu, setToggleMenu] = useState<boolean>(false)
    const {pathname} = useLocation()
    const push = useNavigate()

    const{isLargeDesktop}=useAppMediaQuery()
    const [cookies, setCookie] = useCookies(['token']);
useEffect(()=>{
console.log(cookies)
if(!cookies?.token){
    push("/login")
}
},[cookies?.token])
    

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
                {(toggleMenu) ? <>{Layout}</> :
                    <Affix offsetTop={0}>
                    {Layout}
                </Affix>}
                <div
                     style={toggleMenu ? {display: "none"} : {}} className="layout-content">
                    <div className="page-container">
                            {props.children}
                    </div>
                </div>
                <div  style={toggleMenu ? {display: "none"} : {}} className="layout-footer">
                    <SharedFooter/>
                </div>
            </div>


        </>
    );
};

export default SharedLayout;
