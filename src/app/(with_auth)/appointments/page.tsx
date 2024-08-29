

import PageTitle from "@/components/PageTitle/PageTitle";
import { IoAlarmOutline } from "react-icons/io5";

export const metadata = {
    title: 'Bee.M - Atendimentos'
  }

export default function AppointmentsPage() {
    return (
        <main>
            <PageTitle
                title="Atendimentos"
                icon={IoAlarmOutline}
            />
        </main>
    );
}