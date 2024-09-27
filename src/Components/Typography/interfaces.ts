import {allFamilies, allSizes, colors, fontSizes, languagesWithFontFamilies} from "./constants";
import {ListToUnion, ValuesOf} from "../../../Interfaces/list-operations";

type TypographyFontSizes = ListToUnion<typeof fontSizes>;
export type TypographyColors = ListToUnion<typeof colors>;
export type TypographyFontFamily = ValuesOf<typeof languagesWithFontFamilies>;
type allSizes = ListToUnion<typeof allSizes>;
type allFamilies = ListToUnion<typeof allFamilies>;

export interface ITypographyProps {
    typographyType?: {
        size?: allSizes,
        type?: allFamilies
    }
    typographyFontColor?: TypographyColors
    typographyFontFamily?: TypographyFontFamily
    typographyFontSize?: TypographyFontSizes
}