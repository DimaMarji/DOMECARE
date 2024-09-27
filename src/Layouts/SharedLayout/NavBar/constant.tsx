import React from "react";
import {facebookLink, instagramLink, linkedinLink} from "../../../Constants";
import Facebook from "../../../public/Assets/Icons/SocialMedia/facebook.svg";
import DarkFacebook from "../../../public/Assets/Icons/SocialMedia/dark-facebook.svg";
import LinkedIN from "../../../public/Assets/Icons/SocialMedia/linkedIn.svg";
import DarkLinkedIN from "../../../public/Assets/Icons/SocialMedia/dark-linkedin.svg";
import Behance from "../../../public/Assets/Icons/SocialMedia/behance.svg";
import DarkBehance from "../../../public/Assets/Icons/SocialMedia/dark-behance.svg";


export const socialMediaData = [
    {platform: 'Facebook', link: facebookLink, icon: Facebook, darkIcon: DarkFacebook},
    {platform: 'Linkedin', link: linkedinLink, icon: LinkedIN, darkIcon: DarkLinkedIN},
    {platform: 'Instagram', link: instagramLink, icon: Behance, darkIcon: DarkBehance},
];

