import "./style.scss";
import {Typography} from 'antd';
import {IParagraphProps} from "./interfaces";
import {DefaultFontFamily, DefaultSize, DefaultType} from "../constants";

const Paragraph = ({
                       typographyType,
                       typographyFontColor,
                       typographyFontFamily,
                       typographyFontSize,
                       className,
                       style,
                       ...props
                   }: IParagraphProps) => {
    let language = "en"
    let fontFamily = typographyFontFamily?.en ?? DefaultFontFamily
    let type = typographyType?.size ?? DefaultType
    let size = typographyType?.type ?? DefaultSize
    let typographyClassName = `paragraph-${language}-${fontFamily}-${type}-${size}`
    return (
        <>
            <Typography.Paragraph
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
export default Paragraph;
