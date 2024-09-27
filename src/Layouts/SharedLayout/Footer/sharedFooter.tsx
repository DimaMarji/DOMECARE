import React from 'react';
import "./style.scss"
import LogoImage from "../../../public/Assets/Images/template/jobhub-logo.svg";

import Image from 'next/image'
import {useRouter} from 'next/router';
import {pagesFooterItemsData} from "./constant";
import {Button} from "../../../Components/Atoms/Button";
import {Title} from "../../../Components/Atoms/Typography/Title";
import {Text} from "../../../Components/Atoms/Typography/Text";
import {Divider, Layout, Space} from "antd";

const {Footer} = Layout

const SharedFooter = () => {
    //TODO from api
    const contactInfo = {
        office: {
            address: "Damascus"
        },
    }


    const router = useRouter()
    const {push, query, asPath} = router
    const handleRedirect = (to: any) => {
        push(to)
    }

    const currentYear = new Date().getFullYear()


    const LogoButton = <div className={"company-logo-button"}><Button onClick={() => {
        push("/")
    }} className={""} type={'link'} href={"/"} target={"_blank"}>
        <Image
            width={191}
            height={54}
            alt={"company-logo-image"} className={"company-logo-image"} src={LogoImage}

        />
    </Button>
        <Text
            typographyType={{
                size: "14px-14px-14px",
                type: "regular-regular-regular"
            }}
        >
            JobBox is the heart of the design community and the best resource to discover and connect with designers and
            jobs worldwide.JobBox is the heart of the design community.
        </Text>
    </div>

    const isSelected = (item) => {
        return item.key === '/'
            ? asPath === item.key
            : Array.isArray(item.key)
                ? item.key.some(key => asPath.startsWith(key))
                : asPath.startsWith(item.key)
    }

    const footerColumns = [{
        title: "Pages",
        items: pagesFooterItemsData
    }, {
        title: "Blogs",
        items: pagesFooterItemsData
    },]
    const FooterList = footerColumns?.map((item, key) => {
        return <div key={key} className={`${item?.title?.toLowerCase()}-container`}>
            <Title typographyType={{size: "16px-16px-16px", type: "semi-bold-semi-bold-semi-bold"}}
                   className={"title-text"}
                   level={3}>
                {item?.title}
            </Title>
            <div className={"footer-list"}>
                {item?.items?.map((item, index) => {
                    return <Text key={index}
                                 ellipsis={{tooltip: item?.label}}
                                 onClick={(event) => {
                                     push(item?.key[0], item?.key[1], {scroll: true})
                                 }}

                                 className={`footer-link ${isSelected(item) ? "footer-link-selected" : ""}`}
                                 typographyType={{
                                     size: "14px-14px-14px",
                                     type: "regular-regular-regular"
                                 }}
                    >{item?.label}</Text>
                })}
            </div>
        </div>
    })

    const contactList: any[] = [{
        label: contactInfo?.office?.address,
        //TODO
        onClick: () => {
        }
    }, {
        label: "Phone",
        onClick: () => handleRedirect(`tel:963`)
    }, {
        label: "email",
        onClick: () => handleRedirect(`mailto:email.com`)
    },]

    const ContactUsContainer = (item: any, index: number) => <Space key={index} align={"start"}>
        <Image
            width={24}
            alt={"contact"} src={item?.icon}

        />
        <Title
            level={4}
            onClick={item?.onClick}
            typographyType={{
                size: "16px-16px-16px",
                type: "regular-regular-regular"
            }}

            className={"address-text footer-link"}
        >
            {item?.label}
        </Title>
    </Space>


    return (
        <>
            <Footer className={"website-footer"}>
                <div className={"footer-content"}>
                    {LogoButton}

                    {FooterList}


                    <div className={"contact-container"}>
                        <Title typographyType={{size: "16px-16px-16px", type: "semi-bold-semi-bold-semi-bold"}}
                               className={"title-text"}
                               level={3}
                               typographyFontColor={"#509DD0"}>
                            Contact Us
                        </Title>


                        <div className={"info-details"}>
                            {contactList?.map((item, index) => {
                                return ContactUsContainer(item, index)
                            })}
                        </div>
                    </div>

                </div>

                <div className={"divider-div"}>
                    <Divider className={"Job-footer-divider"}/>
                </div>
                <div className={"copyright-div"}>
                    <span className={"copyright-span"}>
                        <Text typographyFontColor={"#9C9EA5"}
                              typographyType={{size: "14px-14px-14px", type: "regular-regular-regular"}}
                              className={"copyright-text"}
                        >
                            Job@{currentYear} | All rights reserved
                        </Text>
                    </span>
                </div>
            </Footer>
        </>
    );

}
export default SharedFooter;
