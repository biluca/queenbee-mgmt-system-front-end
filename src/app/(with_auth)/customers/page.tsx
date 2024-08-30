import PageTitle from "@/components/PageTitle/PageTitle";
import { IoPeopleOutline } from "react-icons/io5";
import { Customer, fetchSearchedCustomers } from "./actions";
import { formatUUID } from "@/utils";

export default async function CRMPage() {

    const query = ""
    const customers = await fetchSearchedCustomers(query || "") || [];

    return (
        <main>
            <PageTitle
                title="Clientes"
                icon={IoPeopleOutline}
            />
            <table className="hidden min-w-full text-gray-900 md:table">
                <thead className="rounded-lg text-left text-sm font-normal">
                    <tr>
                        <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                            ID
                        </th>
                        <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                            Nome do Cliente
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Email
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Telefone
                        </th>
                        <th scope="col" className="px-3 py-5 font-medium">
                            Instagram
                        </th>
                        <th scope="col" className="relative py-3 pl-6 pr-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {customers?.map((customer: Customer) => (
                        <tr
                            key={customer.uuid}
                            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                        >
                            <td className="whitespace-nowrap px-3 py-3">
                                {formatUUID(customer.uuid)}
                            </td>
                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                <p>{customer.name}</p>
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {customer.email}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {(customer.phonenumber)}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                                {(customer.instagram)}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3">
                            </td>
                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                <div className="flex justify-end gap-3">

                                </div>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>

        </main>
    );
}