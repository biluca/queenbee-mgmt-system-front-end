'use client'

import "./style.scss"
import BeeMLogo from "@/components/BeeMLogo/BeeMLogo";
import Image from 'next/image'
import { Button } from "@/components/Button/Button";
import { FormState, login } from "@/app/(no_auth)/login/loginActions"
import { IoPersonOutline, IoKeyOutline } from "react-icons/io5";
import { useFormState } from 'react-dom'

const initialState: FormState = {
    errors: {
        user: "",
        password: ""
    }
}

export default function LoginPage() {
    const [state, formAction] = useFormState(login, initialState)

    return (
        <main className="LoginContainer">
            <div className="LoginContent">
                <div className="LoginHeader">
                    <BeeMLogo />
                </div>
                <form className="Form" action={formAction}>
                    <div className="FormContent">
                        <div>
                            <label className="FormLabel" htmlFor="email">
                                Usuário
                            </label>
                            <div className="relative">
                                <input
                                    required
                                    id="user"
                                    type="text"
                                    name="user"
                                    placeholder="Digite o seu Usuário"
                                    className="FormInput"
                                />
                                <IoPersonOutline className="FormInputIcon" />
                            </div>
                            {state?.errors?.user && <p>{state.errors.user}</p>}
                        </div>
                        <div >
                            <label className="FormLabel" htmlFor="password">
                                Senha
                            </label>
                            <div className="relative">
                                <input
                                    required
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="Digite sua Senha"
                                    className="FormInput"
                                />
                                <IoKeyOutline className="FormInputIcon" />
                            </div>
                            {state?.errors?.password && <p>{state.errors.password}</p>}
                        </div>
                        <Button>
                            Entrar
                        </Button>
                    </div>
                </form>
                <div className="LoginFooter">
                    Em Parceria com
                    <Image alt='Dog Image' src="/queen_bee.png" width={100} height={0} />
                </div>
            </div>
        </main>



    );
}