import { DELETE_ERROR, GET_ERROR, POST_ERROR, PUT_ERROR } from '../messages';
import { Fetchoptions } from '../types/fetchey';
import { fetchWithTimeout } from '../utils/utils';

export const createFetchey = (method: string) => {
  return async <TData>(
    url: string | URL | Request,
    body?: BodyInit | null,
    init?: Fetchoptions,
    timeout: number = 5000,
  ): Promise<TData> => {
    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...init?.headers,
      },
      ...init,
      body: body ? JSON.stringify(body) : undefined,
    };

    const response = await fetchWithTimeout(url, options, timeout);

    if (!response.ok) {
      let errorType = '';
      switch (method) {
        case 'GET':
          errorType = GET_ERROR;
          break;
        case 'POST':
          errorType = POST_ERROR;
          break;
        case 'PUT':
          errorType = PUT_ERROR;
          break;
        case 'DELETE':
          errorType = DELETE_ERROR;
          break;
      }
      throw new Error(`Error ${method.toLowerCase()}ing data ${response.statusText} - ${errorType}`);
    }

    const data: TData = await response.json();
    return data;
  };
};
