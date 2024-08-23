import { PageTitleProps } from "./PageTitleProps";
import "./style.scss"

export default function PageTitle(props: PageTitleProps) {

    const PageTitleIcon = props.icon

    return (
        <div className="PageTitle">
            <div className="PageTitleIcon">
                <PageTitleIcon />
            </div>
            <h1>{props.title}</h1>
        </div>
    );
}