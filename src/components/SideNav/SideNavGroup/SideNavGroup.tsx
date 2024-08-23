import "../style.scss"
import Link from 'next/link';
import { SideNavGroupProps } from "./SideNavGrouProps";

export default function SideNavGroup(props: SideNavGroupProps) {
    const LinkIcon = props.icon;
    const className = props.active ? "SideNavGroup" : "SideNavGroupInactive"
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