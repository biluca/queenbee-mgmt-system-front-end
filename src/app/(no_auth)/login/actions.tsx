"use server"

import { redirect } from 'next/navigation'
import { createSession } from './session';

export type FormState =
    {
        errors?: {
            user?: string
            password?: string
            authorization?: string
        }
    }


export async function login(state: FormState, formData: FormData): Promise<FormState> {
    const user = (formData.get('user') || "").toString();
    const password = (formData.get('password') || "").toString();

    const userError = validateUser(user);
    const passwordError = validatePassword(password);

    const validationErrors = userError || passwordError;
    if (validationErrors) {
        const errors = {
            user: userError,
            password: passwordError
        }
        console.log(errors)
        return { errors }
    }

    const result = await createSession(user, password)

    if (result.includes("ERRO")) {
        const errors = {
            user: "",
            password: "",
            authorization: result,
        }
        return { errors }
    }

    const dashboardPath = "/dashboard"
    redirect(dashboardPath)
}

function validateUser(user?: string) {
    if (!user) {
        return ""
    }

    // const regex = new RegExp('^(?=.{5,15}$)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]+\.(?=.{5,15}$)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]+$');

    // if (!regex.test(user)) {
    //     return "O Usuário não obedece as regras de formatação!"

    // }

    return "";
}

function validatePassword(password?: string) {
    if (!password) {
        return ""
    }

    if (password.length < 8) {
        return "A Senha deve ter no mínimo 8 caracteres!"
    }

    return "";
}