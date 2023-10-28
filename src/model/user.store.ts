import { writable } from 'svelte/store';
import type { User, UserStoreData } from './user.model';

const mockUser: User = {
   id: '1',
   name: '1',
};

export const userStore = writable<UserStoreData>(null);

export const loadUserByApartmentNumber = (apartmentNumber: number) => {
   userStore.set(mockUser);
};
