'use client'

import "./style.scss"
import PageTitle from "@/components/PageTitle/PageTitle";
import { IoPeopleOutline, IoPersonOutline, IoMailOutline, IoPhonePortraitOutline, IoLogoInstagram } from "react-icons/io5";
import { saveCustomer } from "../actions";
import { Button } from "@/components/Button/Button";
import { toast } from 'react-hot-toast';

export default function CRMPage() {

    const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {

        const toastId = toast.loading('Salvando...');
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);

        try {
            await saveCustomer(formData);
            toast.success('Dados do Cliente Salvos com Sucesso!', { id: toastId });
        } catch (error) {
            toast.error('Erro ao Salvar Dados do Cliente!', { id: toastId });
        }
    };

    return (
        <main>
            <PageTitle
                title="Clientes"
                icon={IoPeopleOutline}
            />
            <form onSubmit={handleSave}>
                <div className="FormContent">
                    <label className="FormLabel">
                        Nome do Cliente
                    </label>
                    <div className="FormInput">
                        <input
                            id="customer_name"
                            name="customer_name"
                            type="text"
                            required
                            placeholder="Digite o Nome do Cliente"
                            className="FormInputField"
                        />
                        <IoPersonOutline className="FormInputIcon" />
                    </div>
                    <label className="FormLabel">
                        Email do Cliente
                    </label>
                    <div className="FormInput">

                        <input
                            id="customer_email"
                            name="customer_email"
                            type="text"
                            required
                            placeholder="Digite o Email do Cliente"
                            className="FormInputField"
                        />
                        <IoMailOutline className="FormInputIcon" />
                    </div>
                    <label className="FormLabel">
                        Telefone do Cliente
                    </label>
                    <div className="FormInput">

                        <input
                            id="customer_phone"
                            name="customer_phone"
                            type="text"
                            required
                            placeholder="Digite o Telefone do Cliente"
                            className="FormInputField"
                        />
                        <IoPhonePortraitOutline className="FormInputIcon" />
                    </div>
                    <label className="FormLabel">
                        Instagram
                    </label>
                    <div className="FormInput">

                        <input
                            id="customer_instagram"
                            name="customer_instagram"
                            type="text"
                            required
                            placeholder="Digite o Instagram do Cliente"
                            className="FormInputField"
                        />
                        <IoLogoInstagram className="FormInputIcon" />
                    </div>
                </div>
                <Button type="submit">Salvar</Button>
                <Button>Limpar</Button>
            </form>

        </main>
    );
}