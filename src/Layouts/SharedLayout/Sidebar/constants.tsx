import { Avatar,Image, Space } from "antd";
import Title from "antd/lib/typography/Title";
import HomeIcon from "../../../assets/Icons/Sider/home.svg";
import DoctorOnlineIcon from "../../../assets/Icons/Sider/doctor-online.svg";
import DrugsIcon from "../../../assets/Icons/Sider/drugs.svg";
import SearchDrugIcon from "../../../assets/Icons/Sider/search-drug.svg";

import OffersIcon from "../../../assets/Icons/Sider/ic_offers.svg";

import MyInstitutionIcon from "../../../assets/Icons/Sider/my-institution.svg";

import InstitutionIcon from "../../../assets/Icons/Sider/institution.svg";
import { ILoginResponse } from "../../../ReactQuery/Auth/useLogin";


export const siderItems =(userData:ILoginResponse,pathname:string)=> [
    { label: <Space className="user-info" align="center">
        <Avatar src={userData?.image}/>
        <Title className="font-size-14">{`${userData?.firstName} ${userData?.lastName}`}</Title>
    </Space>, key: "user", icon: "",disabled:true },
    { label: "Home",className:`${pathname=="/"?"selected-item":""}`, key: "/", icon: <Image width={22} preview={false} src={HomeIcon}  /> },
    { label: "My institution", key: "/my-institution", icon: <Image width={22} preview={false} src={MyInstitutionIcon}  />},
    { label: "Institution", key: "/institution", icon:<Image width={22} preview={false} src={InstitutionIcon}  /> },
    { label: "Drugs", key: "/drugs", icon: <Image preview={false} width={22} src={DrugsIcon}  /> },
    { label: "Doctor Online", key: "/doctor-online", icon:<Image width={22} preview={false} src={DoctorOnlineIcon}  /> },
    { label: "Search Drugs", key: "/search-drug", icon: <Image width={22} preview={false} src={SearchDrugIcon}  /> },
    { label: "Offers", key: "/offers", icon:<Image width={22} preview={false} src={OffersIcon}  />},
  ];