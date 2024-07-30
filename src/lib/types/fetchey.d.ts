declare module 'fetchey' {
  export function get<T>(url: string): Promise<T>;
  export function post<T>(url: string, body: any): Promise<T>;
  export function put<T>(url: string, body: any): Promise<T>;
  export function del<T>(url: string): Promise<T>;
}
