import {ButtonProps} from "antd";
import {ListToUnion} from "../../../Interfaces/list-operations";
import {buttonTypes} from "./constants";
import {ITextProps} from "../Typography/Text/interfaces";

type buttonTypes = ListToUnion<typeof buttonTypes>;

export interface IButtonProps extends Omit<ButtonProps, "type"> {
    type?: buttonTypes
    textProps?: ITextProps
}