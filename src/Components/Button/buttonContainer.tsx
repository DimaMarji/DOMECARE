import React from "react";
import "./style.scss"
import {Button as AntdButton} from "antd";
import {IButtonProps} from "./interface";
import {ButtonTypes} from "./constants";


const Button: React.FC<IButtonProps> = ({
                                            className,
                                            children,
                                            type = "primary",
                                            ...props
                                        }) => {
    return (
        <>
            <AntdButton
                type={ButtonTypes[type]}
                className={className ? `default-button ${className}` : `default-button`}
                {...props}>
              
                    {children}
            </AntdButton>
        </>
    );
};

export default Button;
