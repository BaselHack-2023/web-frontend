import { writable } from 'svelte/store';
import { post } from '../utils/rest.utils';
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

const sortReservations = (reservations: Reservation[]): Reservation[] => {
   return reservations?.sort((reservationA, reservationB) =>
      reservationA.startTime.isAfter(reservationB.startTime) ? -1 : 1
   );
};

const filterReservations =
   (dateToFilterFor: Date) =>
   (reservation: Reservation): boolean => {
      const now = new Date();
      let isValid = dateToFilterFor.isSameDay(reservation.startTime);
      if (now.isSameDay(dateToFilterFor)) {
         isValid = isValid && reservation.startTime.isAfter(now);
      }
      return isValid;
   };

// public methods

export const loadReservationsForDay = (date: Date): void => {
   const reservations = sortReservations(
      mockedReservations
         .map(mapDtoToReservation)
         .filter(filterReservations(date))
   );
   reservationStore.set(reservations);
};

export const createReservation = async (
   user: string,
   startTime: Date,
   endTime: Date
): Promise<void> => {
   post<ReservationDto>('/reservations', {
      owner: user,
      start_time: startTime.toISOString(),
      end_time: endTime.toISOString(),
   }).then((json) => {
      reservationStore.update((reservations) => {
         const newReservations = !!reservations ? reservations : [];
         return sortReservations([
            ...newReservations,
            mapDtoToReservation(json),
         ]);
      });
   });
};
