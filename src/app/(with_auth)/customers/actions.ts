"use server";

import { getApiClient } from "@/services/backend.api";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type FormState = {
  name: string;
  email: string;
  phoneNumber: string;
  instagram: string;
};

export type Customer = {
  uuid: string;
  name: string;
  email: string;
  phonenumber: string;
  instagram: string;
  createdat: string;
  updatedat: string;
};

export async function saveCustomer(formData: FormData): Promise<any> {
  try {
    const apiClient = await getApiClient();
    const customerData = {
      name: (formData.get("customer_name") || "").toString(),
      email: (formData.get("customer_email") || "").toString(),
      phoneNumber: (formData.get("customer_phone") || "").toString(),
      instagram: (formData.get("customer_instagram") || "").toString(),
    };

    await apiClient.post("customer/", customerData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error:", error);
  }

  revalidatePath("/customers");
  redirect("/customers");
}

export async function fetchSearchedCustomers(query: string) {
  try {
    const apiClient = await getApiClient();

    const response = await apiClient.get("https://queenbee-mgmt-system-back-end.vercel.app/customer/", {
      params: {
        name: query,
        email: query,
        instagram: query,
        phonenumber: query,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
}
