import { writable } from 'svelte/store';
import type { Reservation, ReservationStoreData } from './reservation.model';

const mockedReservations: Reservation[] = [
   {
      id: '1',
      owner: '1',
      startTime: 1698667200,
      endTime: 1698670800,
   },
   {
      id: '2',
      owner: '2',
      startTime: 1698678000,
      endTime: 1698681600,
   },
];

const reservations$ = writable<ReservationStoreData>(null);

export const loadSlots = (): Reservation[] => {
   return mockedReservations;
};
