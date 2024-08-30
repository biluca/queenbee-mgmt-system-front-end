import PageTitle from "@/components/PageTitle/PageTitle";
import TodayBirthdays from "./todayBirthdays";
import { IoHomeOutline } from "react-icons/io5";

export default function DashboardPage() {
    return (
        <main>
            <PageTitle
                title="Home"
                icon={IoHomeOutline}
            />

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
                <TodayBirthdays />
            </div>
        </main>
    );
}