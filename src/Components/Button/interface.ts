import {ButtonProps} from "antd";
import {buttonTypes} from "./constants";

type buttonTypes = any<typeof buttonTypes>;

export interface IButtonProps extends Omit<ButtonProps, "type"> {
    type?: buttonTypes;
}