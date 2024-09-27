import React, {useEffect} from 'react';
import LoadingProps from "./interface";
import "./style.scss";
import {LoadingIndicator} from "../../Components/Loading";

let gIsPartial: boolean = false;

const Loading: React.FC<LoadingProps> = ({isLoading, disableScroll, isPartial}) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        if (isPartial === true) gIsPartial = true;
        if (disableScroll === false) {
            // enableBodyScroll();
            gIsPartial = false;
        }
        if (gIsPartial === false && typeof (disableScroll) === "undefined") {
            // enableBodyScroll();
        }
    }, [isLoading])
    return (
        <div className={"loading"}>
            <LoadingIndicator/>
        </div>
    );
};

export default Loading;


