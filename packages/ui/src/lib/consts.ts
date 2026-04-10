import { FaGithub, FaLinkedin, FaTwitter, FaMailBulk } from "react-icons/fa";



export interface Social {
    NAME: string
    HREF: string
    ICON: any
}

export const SOCIALS: Social[] = [
    { NAME: "Github", ICON: FaGithub, HREF: "https://github.com/dynage-engineering/" },
    { NAME: "LinkedIn", ICON: FaLinkedin, HREF: "https://www.linkedin.com/company/dynage/" },
    { NAME: "Twitter", ICON: FaTwitter, HREF: "https://www.x.com/_dynage/" },
    { NAME: "Mail", ICON: FaMailBulk, HREF: "mailto:hello@dynage.technology" },
]
