// Generic response
export interface IApiResponse<T = unknown> {
    success: boolean;
    data?: T;
    message?: string;
    error?: string;
    cached?: boolean; // later for redis
}
