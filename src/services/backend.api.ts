import axios from "axios";
import { toast } from 'react-hot-toast';
import { cookies } from "next/headers";

export async function getApiClient(user: string, password: string) {
  let token = await cookies().get("token")?.value.toString();

  if (!token) {
    token = await getToken(user, password);
  }

  const api = axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
      "api-key": process.env.API_KEY || "",
      authorization: `${token}`,
      "Access-Control-Allow-Origin": "*",
    },
  });

  return api;
}

export async function getToken(username: string, password: string) {
  try {
    const response = await axios.post(
      `${process.env.API_BASE_URL}/auth/login`,
      {
        username: username,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data["token"];
  } catch (error) {
    console.error("Error:", error);
    return "ERRO! Usuário ou Senha Inválidos!"
  }
}
