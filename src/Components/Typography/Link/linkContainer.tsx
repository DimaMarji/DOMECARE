import "./style.scss";
import {Typography} from 'antd';
import {ILinkProps} from "./interfaces";
import {DefaultFontFamily, DefaultSize, DefaultType} from "../constants";

const Link = ({
                  typographyType,
                  typographyFontColor,
                  typographyFontFamily,
                  typographyFontSize,
                  className,
                  style,
                  ...props
              }: ILinkProps) => {
    let language = "en"
    let fontFamily = typographyFontFamily?.en ?? DefaultFontFamily
    let type = typographyType?.size ?? DefaultType
    let size = typographyType?.type ?? DefaultSize
    let typographyClassName = `link-${language}-${fontFamily}-${type}-${size}`
    return (
        <>
            <Typography.Link
                className={className ? `${className} ${typographyClassName}` : `${typographyClassName}`}
                style={{
                    color: typographyFontColor,
                    fontSize: typographyFontSize,
                    ...style
                }}
                {...props}
            />
        </>
    )

}
export default Link;
