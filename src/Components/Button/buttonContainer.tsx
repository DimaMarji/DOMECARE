import React from "react";
import "./style.scss"
import {Button as AntdButton} from "antd";
import {IButtonProps} from "./interface";
import {Text} from "../Typography/Text"
import {ButtonTypes} from "./constants";


const Button: React.FC<IButtonProps> = ({
                                            className,
                                            textProps,
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
                <Text
                    typographyType={{
                        size: "16px-16px-16px",
                        type: "semi-bold-semi-bold-semi-bold"
                    }}
                    {...textProps}>
                    {children}
                </Text>
            </AntdButton>
        </>
    );
};

export default Button;
