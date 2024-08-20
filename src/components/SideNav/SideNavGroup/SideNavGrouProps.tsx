import { SideNavItemProps } from "../SideNavItem/SideNavtItemProps"

export type SideNavGroupProps = {
    name: string
    href: string
    icon: any
    nav_items?: Array<SideNavItemProps>
}