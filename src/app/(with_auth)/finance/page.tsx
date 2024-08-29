import PageTitle from "@/components/PageTitle/PageTitle";
import { IoWalletOutline } from "react-icons/io5";

export default function FinancePage() {
    return (
        <main>
            <PageTitle
                title="Financeiro"
                icon={IoWalletOutline}
            />
        </main>
    );
}