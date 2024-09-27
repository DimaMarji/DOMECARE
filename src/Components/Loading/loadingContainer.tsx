import React from 'react';
import {LoadingProps} from "./interface";
import "./style.scss";
// import LoadingGIF from "../../../public/Assets/Images/template/loading.gif";


const LoadingIndicator: React.FC<LoadingProps> = () => {
    return (
        <div className={"loading-indicator"}>
            {/* <Image  width={300} alt={"loading"} src={"LoadingGIF"}/> */}
        </div>
    );
};
export default LoadingIndicator;