import { writable } from 'svelte/store';
import { get } from '../utils/rest.utils';
import type { User, UserStoreData } from './user.model';

export const userStore = writable<UserStoreData>(null);

export const loadUserByApartmentNumber = (apartmentNumber: number) => {
   get<{ data: User[] }>('/users')
      .then((response) => response.data)
      .then((users) => {
         const user = users.find(
            (user) => user.name === apartmentNumber.toString()
         );
         userStore.set(user ?? null);
      });
};
