import { writable } from 'svelte/store';
import {
   mapDtoToReservation,
   type Reservation,
   type ReservationDto,
   type ReservationStoreData,
} from './reservation.model';

const mockedReservations: ReservationDto[] = [
   {
      id: '2',
      owner: '2',
      start_time: '2023-10-30T15:00:00.00+01:00',
      end_time: '2023-10-30T16:00:00.00+01:00',
   },
   {
      id: '1',
      owner: '1',
      start_time: '2023-10-30T12:00:00.00+01:00',
      end_time: '2023-10-30T13:00:00.00+01:00',
   },
];

export const reservationStore = writable<ReservationStoreData>(null);

const sortReservations = (reservations: Reservation[]) => {
   return reservations?.sort((reservationA, reservationB) =>
      reservationA.startTime.isAfter(reservationB.startTime) ? -1 : 1
   );
};

export const loadReservationsForDay = (date: Date): void => {
   const reservations = sortReservations(
      mockedReservations
         .map(mapDtoToReservation)
         .filter((reservation) => date.isSameDay(reservation.startTime))
   );
   reservationStore.set(reservations);
};

export const createReservation = (startTime: Date, endTime: Date): void => {
   reservationStore.update((reservations) => {
      const newReservations = !!reservations ? reservations : [];
      return sortReservations([
         ...newReservations,
         {
            id: 'new',
            owner: '1',
            startTime,
            endTime,
         },
      ]);
   });
};
