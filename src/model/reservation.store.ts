import { writable } from 'svelte/store';
import { isSameDay } from '../utils/date.utils';
import {
   mapDtoToReservation,
   type ReservationDto,
   type ReservationStoreData,
} from './reservation.model';

const mockedReservations: ReservationDto[] = [
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

export const reservationStore = writable<ReservationStoreData>(null);

export const loadReservationsForDay = (date: Date) => {
   const reservations = mockedReservations
      .map(mapDtoToReservation)
      .filter((reservation) => isSameDay(date, reservation.startTime));
   reservationStore.set(reservations);
};
