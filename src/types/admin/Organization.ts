export type Organization = {
    id: string;
    name: string;
    status: "pending" | "processing" | "success" | "failed"
}

export type Organizations = Organization[];