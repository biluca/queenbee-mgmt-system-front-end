import { SideNavGroupProps } from "@/components/SideNav/SideNavGroup/SideNavGrouProps";
import { SideNavItemProps } from "@/components/SideNav/SideNavItem/SideNavtItemProps";

import { IoHomeOutline, IoPeopleOutline, IoWalletOutline, IoCubeOutline, IoSettingsOutline, IoCalendarOutline, IoAlarmOutline, IoCaretForwardOutline } from "react-icons/io5";

const settingsItemList: Array<SideNavItemProps> = [
    {
        name: "Usuários",
        href: "/users",
        icon: IoCaretForwardOutline
    },
    {
        name: "Perfurações",
        href: "/services",
        icon: IoCaretForwardOutline
    },
    {
        name: "Pagamentos",
        href: "/payments",
        icon: IoCaretForwardOutline
    },
    {
        name: "Categorias",
        href: "/categories",
        icon: IoCaretForwardOutline
    }

]


export const navigationGroupList: Array<SideNavGroupProps> = [
    {
        name: "Home",
        href: "/dashboard",
        icon: IoHomeOutline,
        nav_items: []
    },
    {
        name: "Agenda",
        href: "/schedule",
        icon: IoCalendarOutline,
        nav_items: []
    },
    {
        name: "Atendimentos",
        href: "/appointments",
        icon: IoAlarmOutline,
        nav_items: []
    },
    {
        name: "Clientes",
        href: "/customers",
        icon: IoPeopleOutline,
        nav_items: []
    },
    {
        name: "Financeiro",
        href: "/finance",
        icon: IoWalletOutline,
        nav_items: []
    }
    ,
    {
        name: "Estoque",
        href: "/stock",
        icon: IoCubeOutline,
        nav_items: []
    }
    ,
    {
        name: "Configurações",
        href: "/settings",
        icon: IoSettingsOutline,
        nav_items: settingsItemList
    }
]




