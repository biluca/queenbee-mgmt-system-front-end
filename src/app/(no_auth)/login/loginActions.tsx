"use server"

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache';

export type FormState =
    | {
        errors?: {
            user?: string
            password?: string
        }
    }
    | undefined

export async function login(state: FormState, formData: FormData) {
    const user = formData.get('user')?.toString();
    const password = formData.get('password')?.toString();

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

    //HERE I SHOULD VALIDATE THE USER DATA
    
    //HERE I SHOULD CREATE A SESSION

    const dashboardPath = "/dashboard"
    revalidatePath(dashboardPath)
    redirect(dashboardPath)
}

function validateUser(user?: string) {
    if (!user) {
        return ""
    }

    const regex = new RegExp('^(?=.{5,15}$)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]+\.(?=.{5,15}$)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]+$');

    if (!regex.test(user)) {
        return "O Usuário não obedece as regras de formatação!"

    }

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