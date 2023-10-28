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
      start_time: '2023-10-30T12:00:00.00+01:00',
      end_time: '2023-10-30T13:00:00.00+01:00',
   },
   {
      id: '2',
      owner: '2',
      start_time: '2023-10-30T15:00:00.00+01:00',
      end_time: '2023-10-30T16:00:00.00+01:00',
   },
];

export const reservationStore = writable<ReservationStoreData>(null);

export const loadReservationsForDay = (date: Date) => {
   const reservations = mockedReservations
      .map(mapDtoToReservation)
      .filter((reservation) => isSameDay(date, reservation.startTime));
   reservationStore.set(reservations);
};
