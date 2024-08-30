import { SideNavGroupProps } from "@/components/SideNav/SideNavGroup/SideNavGrouProps";
import { SideNavItemProps } from "@/components/SideNav/SideNavItem/SideNavtItemProps";

import { IoHomeOutline, IoPeopleOutline, IoWalletOutline, IoCubeOutline, IoSettingsOutline, IoCalendarOutline, IoAlarmOutline, IoCaretForwardOutline } from "react-icons/io5";

const customersNavItemList: Array<SideNavItemProps> = [
    {
        name: "Novo Cliente",
        href: "/customers/new",
        icon: IoCaretForwardOutline,
        active: true
    },
    {
        name: "Leads",
        href: "/customers/leads",
        icon: IoCaretForwardOutline,
        active: false
    },

]

const appointmentsNavItemList: Array<SideNavItemProps> = [
    {
        name: "Novo Atendimento",
        href: "/appointment/new",
        icon: IoCaretForwardOutline,
        active: true
    },
    {
        name: "Pós-Atendimento",
        href: "/appointment/after",
        icon: IoCaretForwardOutline,
        active: false
    },

]

const financeNavItemList: Array<SideNavItemProps> = [
    {
        name: "Novo Pagamento",
        href: "/appointment/new",
        icon: IoCaretForwardOutline,
        active: true
    },
    {
        name: "Entradas e Saídas",
        href: "/appointment/after",
        icon: IoCaretForwardOutline,
        active: false
    },

]

const settingsNavItemList: Array<SideNavItemProps> = [
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
        name: "Clientes",
        href: "/customers",
        icon: IoPeopleOutline,
        nav_items: customersNavItemList,
        active: true
    },
    {
        name: "Atendimentos",
        href: "/appointments",
        icon: IoAlarmOutline,
        nav_items: appointmentsNavItemList,
        active: true
    },
    {
        name: "Financeiro",
        href: "/finance",
        icon: IoWalletOutline,
        nav_items: financeNavItemList,
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
        nav_items: settingsNavItemList,
        active: false
    }
]




