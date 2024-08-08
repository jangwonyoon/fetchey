export interface FetchOptions extends RequestInit {
  abortable?: boolean;
  responseType?: 'text' | 'arraybuffer' | 'blob' | 'json';
  timeout?: number;
}
