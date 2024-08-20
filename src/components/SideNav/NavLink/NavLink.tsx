import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
import { NavLinkProps } from "./NavLinkProps";
import "../style.scss"
import Link from 'next/link';

export default function NavLink(props: NavLinkProps) {

    const LinkIcon = props.icon;

    return (
        <Link
            key={props.name}
            href={props.href}
            className="NavLink">
            <LinkIcon />
            <p>{props.name}</p>
        </Link>
    );

}