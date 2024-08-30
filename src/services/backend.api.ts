import axios from "axios";
import { cookies } from "next/headers";

export async function getApiClient() {
  let token = await cookies().get("token")?.value.toString();

  const api = axios.create({
    baseURL: "https://queenbee-mgmt-system-back-end.vercel.app",
    headers: {
      "api-key": "zpoQTnQ3yGJNOcOY8JuK9QBv" || "",
      authorization: `${token}`,
      "Access-Control-Allow-Origin": "*",
    },
  });

  return api;
}

export async function getToken(username: string, password: string) {
  try {
    const response = await axios.post(
      `https://queenbee-mgmt-system-back-end.vercel.app/auth/login`,
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
