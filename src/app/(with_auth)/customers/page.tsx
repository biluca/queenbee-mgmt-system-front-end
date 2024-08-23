import PageTitle from "@/components/PageTitle/PageTitle";
import { IoPeopleOutline } from "react-icons/io5";

export default function CRMPage() {
    return (
        <main>
            <PageTitle
                title="Clientes"
                icon={IoPeopleOutline}
            />
        </main>
    );
}