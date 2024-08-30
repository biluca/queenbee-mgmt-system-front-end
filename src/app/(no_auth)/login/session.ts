import "server-only";

import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { getToken } from "@/services/backend.api";

const secretKey = "OOwWPR4ifxAHu+EhZ2iDOtxKoGKwa6tx0i11Ink+DcE=";
const encodedKey = new TextEncoder().encode(secretKey);

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify session");
  }
}

export async function createSession(user: string, password: string) {
  const token = await getToken(user, password);

  if (token.includes("ERRO")) {
    return token;
  }

  cookies().set("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });

  return token;
}
