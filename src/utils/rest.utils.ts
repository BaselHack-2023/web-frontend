import { BASE_URL } from '../consts';

export const get = async <T>(endpoint: string) => {
   return fetch(`${BASE_URL}${endpoint}`, {
      method: 'GET',
   }).then((response: Response) => response.json() as T);
};

export const post = async <T>(endpoint: string, body: T): Promise<T> => {
   const json = JSON.stringify(body);
   return fetch(`${BASE_URL}${endpoint}`, {
      method: 'POST',
      body: json,
   }).then((response: Response) => response.json() as T);
};
