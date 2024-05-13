import { Organization, Organizations } from "@/types/admin/Organization";
import { RequestOptions, apiRequest } from "./AdminApiRequest";

export const createOrganization = async (input: Organization): Promise<string> => {

    

    return "";
}

export const getOrganizationById = async (id: string): Promise<Organization> => {
    return await apiRequest(`movies/${encodeURIComponent(id)}`);
}

export const searchOrganizations = async (
    title: string = '',
    genre: string = '',
    options?: RequestOptions
): Promise<Organizations> => {
    return apiRequest(
        `movies`,
        {
            title_like: encodeURIComponent(title),
            genres_like: encodeURIComponent(genre)
        },
        options
    );
}