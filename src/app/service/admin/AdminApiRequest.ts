import { config } from "@/app/config";

const { API_ADMIN_URL } = config;

export interface ApiQueryParameters {
    [key: string]: string | number | boolean;
  }

export interface RequestOptions {
    page?: number;
    limit?: number;
}

export const defaultOptions: RequestOptions = {
    page: 0,
    limit: 10,
  };

export interface PageResponse {
  currentPage: number;
  perPage: number;
  total: number;
}

export function buildQueryString(params: ApiQueryParameters): string {
    const query = Object.entries(params)
      .filter(([, value]) => value !== undefined)
      .map(([key, value]) => [key, encodeURIComponent(String(value))]);
  
    return `?${new URLSearchParams(Object.fromEntries(query)).toString()}`;
  }

export async function apiRequest<T>(
    endpoint: string,
    query: ApiQueryParameters = {},
    options: RequestOptions = {}
  ): Promise<T> {
    const mergedOptions: RequestOptions = { ...defaultOptions, ...options };
    const queryString: string = buildQueryString({ ...query, ...mergedOptions });
    try {

      const url = `${API_ADMIN_URL}/${endpoint}${queryString}`;
      console.log(url);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  }