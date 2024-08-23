import { SideNavGroupProps } from "@/components/SideNav/SideNavGroup/SideNavGrouProps";
import { SideNavItemProps } from "@/components/SideNav/SideNavItem/SideNavtItemProps";

import { IoHomeOutline, IoPeopleOutline, IoWalletOutline, IoCubeOutline, IoSettingsOutline, IoCalendarOutline, IoAlarmOutline, IoCaretForwardOutline } from "react-icons/io5";

const settingsItemList: Array<SideNavItemProps> = [
    {
        name: "Usuários",
        href: "/users",
        icon: IoCaretForwardOutline,
        active: false
    },
    {
        name: "Perfurações",
        href: "/services",
        icon: IoCaretForwardOutline,
        active: false
    },
    {
        name: "Pagamentos",
        href: "/payments",
        icon: IoCaretForwardOutline,
        active: false
    },
    {
        name: "Categorias",
        href: "/categories",
        icon: IoCaretForwardOutline,
        active: false
    }

]


export const navigationGroupList: Array<SideNavGroupProps> = [
    {
        name: "Home",
        href: "/dashboard",
        icon: IoHomeOutline,
        nav_items: [],
        active: true
    },
    {
        name: "Agenda",
        href: "/schedule",
        icon: IoCalendarOutline,
        nav_items: [],
        active: false
    },
    {
        name: "Atendimentos",
        href: "/appointments",
        icon: IoAlarmOutline,
        nav_items: [],
        active: false
    },
    {
        name: "Clientes",
        href: "/customers",
        icon: IoPeopleOutline,
        nav_items: [],
        active: true
    },
    {
        name: "Financeiro",
        href: "/finance",
        icon: IoWalletOutline,
        nav_items: [],
        active: false
    }
    ,
    {
        name: "Estoque",
        href: "/stock",
        icon: IoCubeOutline,
        nav_items: [],
        active: false
    }
    ,
    {
        name: "Configurações",
        href: "/settings",
        icon: IoSettingsOutline,
        nav_items: settingsItemList,
        active: false
    }
]




