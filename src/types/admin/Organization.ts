export type Organization = {
    id: string;
    name: string;
    document_type: "cpf" | "cnpj";
    document_number: string;
}

export type Organizations = Organization[];