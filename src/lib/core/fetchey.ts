import { DELETE_ERROR, GET_ERROR, POST_ERROR, PUT_ERROR } from '../messages';

export const get = async <TData>(url: string | URL): Promise<TData> => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching data ${response.statusText} - ${GET_ERROR}`);
  }
  const data: TData = await response.json();
  return data;
};

export const post = async <TData>(url: string | URL, body: any): Promise<TData> => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Error posting data ${response.statusText} - ${POST_ERROR}`);
  }

  const data: TData = await response.json();
  return data;
};

export const put = async <TData>(url: string | URL, body: any): Promise<TData> => {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Error putting data ${response.statusText} - ${PUT_ERROR}`);
  }

  const data: TData = await response.json();
  return data;
};

export const del = async <T>(url: string): Promise<T> => {
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error(`Error deleting data: ${response.statusText} - ${DELETE_ERROR}`);
  }
  const data: T = await response.json();
  return data;
};
