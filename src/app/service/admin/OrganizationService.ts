import { Organization, Organizations } from "@/types/admin/Organization";
import { PageResponse, RequestOptions, apiRequest } from "./AdminApiRequest";

interface OrganizationListResponse {
    id: string;
    name: string;
    document_type: "cpf" | "cnpj";
    document_number: string;
}

export interface OrganizationSearchResponse extends PageResponse {
    items: OrganizationListResponse[];
}

export const createOrganization = async (input: Organization): Promise<string> => {



    return "";
}

export const getOrganizationById = async (id: string): Promise<Organization> => {
    return await apiRequest(`movies/${encodeURIComponent(id)}`);
}

export const searchOrganizations = async (
    // title: string = '',
    // genre: string = '',
    // options?: RequestOptions
): Promise<OrganizationSearchResponse> => {
    return apiRequest(
        `organizations`,
        // {
        //     title_like: encodeURIComponent(title),
        //     genres_like: encodeURIComponent(genre)
        // },
        // options
    );
}