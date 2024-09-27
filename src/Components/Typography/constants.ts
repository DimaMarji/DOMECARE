import {combineSameArrayTripleTimes} from "./helpers";

export const fontFamilies =
    [
        "regular",
        "medium",
        "semi-bold",
        "bold",
    ] as const

export const fontSizes = [
    "10px",
    "12px",
    "13px",
    "14px",
    "16px",
    "18px",
    "20px",
    "22px",
    "24px",
    "25px",
    "28px",
    "30px",
    "32px",
    "36px",
    "38px",
    "40px",
    "48px",
    "52px",
    "64px",
    "120px"
] as const

export const colors = [
    "#42526D",
    "#6c757d",
    "#3C65F5",
    "#757575",
    "#FFFFFF",
    "#363E6F",
    "#1F83F4",
    "#509DD0",
    "#509DD0",
    "#FFBF38",
    "#f8c80d",
    "#98A1B0",
    "#05264E",
    "#7A8699",
    "#9F2039",
    "#8993A4",
    "#444754",
    "#70737C",
    "#353846",
    "#9C9EA5",
    "#303A42",
    "#5E616C",
    "#F2F2F3",
    "#DEDFE1",
    "#253747",
    "#201A2D",
    "#1F3A55",
    "#F89B35",
    "#4F5E64",
    "#66789C",
    "#A0ABB8"
] as const

export const languagesWithFontFamilies = {
    en: [
        'plus-jakarta-sans',
    ] as const
}

export const allSizes = combineSameArrayTripleTimes(fontSizes)
export const allFamilies = combineSameArrayTripleTimes(fontFamilies)


export const DefaultFontFamily = languagesWithFontFamilies["en"][0]
export const DefaultType = allSizes[0]
export const DefaultSize = allFamilies[0]