import "../style.scss"
import Link from 'next/link';
import { SideNavItemProps } from "./SideNavtItemProps";

export default function SideNavItem(props: SideNavItemProps) {
    const LinkIcon = props.icon;

    const className = props.active ? "SideNavItem" : "SideNavItemInactive"
    const href = props.active ? props.href : ""

    return (
        <Link
            key={props.name}
            href={href}
            className={className}>
            <LinkIcon />
            <p>{props.name}</p>
        </Link>
    );

}