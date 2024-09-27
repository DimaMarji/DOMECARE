import "./style.scss";
import {Typography} from 'antd';
import {ITextProps} from "./interfaces";
import {DefaultFontFamily, DefaultSize, DefaultType} from "../constants";

const Text = ({
                  typographyType,
                  typographyFontColor,
                  typographyFontFamily,
                  typographyFontSize,
                  className,
                  style,
                  ...props
              }: ITextProps) => {
    let language = "en"
    let fontFamily = typographyFontFamily?.en ?? DefaultFontFamily
    let type = typographyType?.size ?? DefaultType
    let size = typographyType?.type ?? DefaultSize
    let typographyClassName = `text-${language}-${fontFamily}-${type}-${size}`
    return (
        <>
            <Typography.Text
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
export default Text;
