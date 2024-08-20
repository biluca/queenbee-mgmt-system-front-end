import "../style.scss"
import Link from 'next/link';
import { SideNavItemProps } from "./SideNavtItemProps";

export default function SideNavItem(props: SideNavItemProps) {
    const LinkIcon = props.icon;
    return (
        <Link
            key={props.name}
            href={props.href}
            className="SideNavItem">
            <LinkIcon />
            <p>{props.name}</p>
        </Link>
    );

}