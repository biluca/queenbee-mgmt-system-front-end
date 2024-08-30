import { PageTitleProps } from "./PageTitleProps";
import "./style.scss"

export default function PageTitle(props: PageTitleProps) {

    const PageTitleIcon = props.icon

    return (
        <div className="PageTitle">
            <div className="PageTitleIcon">
                <PageTitleIcon />
            </div>
            <h3>{props.title}</h3>
        </div>
    );
}