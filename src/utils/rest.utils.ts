import { BASE_URL } from '../consts';

export const get = async <T>(endpoint: string) => {
   return fetch(`${BASE_URL}${endpoint}`, {
      method: 'GET',
   }).then((response: Response) => response.json() as T);
};

export const post = async <T>(
   endpoint: string,
   body: T
): Promise<{ data: T }> => {
   const json = JSON.stringify(body);
   const options = {
      method: 'POST',
      body: json,
      headers: new Headers({ 'content-type': 'application/json' }),
   };
   return fetch(`${BASE_URL}${endpoint}`, options).then((response: Response) =>
      response.json()
   );
};
