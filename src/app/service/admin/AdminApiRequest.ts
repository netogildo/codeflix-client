import { config } from "@/app/config";

const { API_ADMIN_URL } = config;

export interface ApiQueryParameters {
    [key: string]: string | number | boolean;
  }

export interface RequestOptions {
    page?: number;
    _limit?: number;
    rating_like?: string;
}

export const defaultOptions: RequestOptions = {
    page: 1,
    _limit: 10,
  };

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
      const response = await fetch(`${API_ADMIN_URL}/${endpoint}${queryString}`);
      if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  }