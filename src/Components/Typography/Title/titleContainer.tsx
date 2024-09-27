import {Typography} from "antd";
import {ITitleProps} from "./interfaces";
import './style.scss'
import {DefaultFontFamily, DefaultSize, DefaultType} from "../constants";

const Title = ({
                   typographyType,
                   typographyFontColor,
                   typographyFontFamily,
                   typographyFontSize,
                   className,
                   style,
                   ...props
               }: ITitleProps) => {
    let language = "en"
    let fontFamily = typographyFontFamily?.en ?? DefaultFontFamily
    let type = typographyType?.size ?? DefaultType
    let size = typographyType?.type ?? DefaultSize
    let typographyClassName = `title-${language}-${fontFamily}-${type}-${size}`
    return (
        <>
            <Typography.Title
                className={className ? `${className} ${typographyClassName}` : `${typographyClassName}`}
                level={3}
                style={{
                    color: typographyFontColor,
                    fontSize: typographyFontSize,
                    ...style
                }}
                {...props}
            />
        </>
    );
};

export default Title;
