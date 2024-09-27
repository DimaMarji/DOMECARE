import {useMediaQuery} from "react-responsive";
import {
    desktopMaxWidth,
    desktopMinWidth,
    largeDesktopMinWidth,
    mobileMaxWidth,
    mobileMinWidth,
    notMobileMaxWidth,
    notMobileMinWidth,
    tabletMaxWidth,
    tabletMinWidth
} from "../../Constants/MediaQuery/screenSizes";

export const useAppMediaQuery = () => {

    //is Mobile
    const isMobile = useMediaQuery({maxWidth: mobileMaxWidth})

    //is Tablet
    const isTablet = useMediaQuery({minWidth: tabletMinWidth, maxWidth: tabletMaxWidth})

    // is Mobile Or Tablet
    const isMobileOrTablet = useMediaQuery({minWidth: mobileMinWidth, maxWidth: tabletMaxWidth})

    //is Desktop
    const isDesktop = useMediaQuery({minWidth: desktopMinWidth, maxWidth: desktopMaxWidth})

    // is Not Mobile
    const isNotMobile = useMediaQuery({minWidth: notMobileMinWidth, maxWidth: notMobileMaxWidth})

    //  is Large Desktop
    const isLargeDesktop = useMediaQuery({minWidth: largeDesktopMinWidth})

    return { isMobile, isMobileOrTablet , isDesktop, isTablet, isNotMobile, isLargeDesktop};
};





