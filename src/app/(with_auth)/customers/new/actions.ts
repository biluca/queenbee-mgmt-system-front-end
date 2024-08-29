import { getApiClient } from "@/services/backend.api";

export async function saveCustomer(formData: any) {
    const apiClient = getApiClient();
    await apiClient.post(`/customer`, formData)
}