import "../style.scss"
import Link from 'next/link';
import { SideNavGroupProps } from "./SideNavGrouProps";

export default function SideNavGroup(props: SideNavGroupProps) {
    const LinkIcon = props.icon;
    return (
        <Link
            key={props.name}
            href={props.href}
            className="SideNavGroup">
            <LinkIcon />
            <p>{props.name}</p>
        </Link>
    );

}