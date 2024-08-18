import NavLink from "@/components/NavLink/NavLink";
import { NavLinkProps } from "@/components/NavLink/NavLinkProps";

import { BsPeopleFill, BsBoxSeamFill } from "react-icons/bs";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

const navigationList: Array<NavLinkProps> = [
    {
        name: "Customers",
        href: "/crm",
        icon: BsPeopleFill
    },
    {
        name: "Finances",
        href: "/financeiro",
        icon: FaMoneyCheckAlt
    },
    {
        name: "Stock",
        href: "/estoque",
        icon: BsBoxSeamFill
    },
    {
        name: "Settings",
        href: "/configuracoes",
        icon: IoSettings
    },

]

export default function Navigation() {
    //const pathname = usePathname();

    return (
        <>
            {navigationList.map((navigationLink) => {
                const LinkIcon = navigationLink.icon;
                return (
                    <NavLink
                        key={navigationLink.name}
                        name={navigationLink.name}
                        href={navigationLink.href}
                        icon={navigationLink.icon}
                    />
                );
            })}
        </>
    );
}






