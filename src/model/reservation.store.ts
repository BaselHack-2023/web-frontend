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
      machine: '1',
   },
   {
      id: '1',
      owner: '1',
      start_time: '2023-10-30T12:00:00.00+01:00',
      end_time: '2023-10-30T13:00:00.00+01:00',
      machine: '1',
   },
   {
      id: '3',
      owner: '3',
      start_time: '2023-10-29T15:00:00.00+01:00',
      end_time: '2023-10-29T16:00:00.00+01:00',
      machine: '1',
   },
   {
      id: '4',
      owner: '4',
      start_time: '2023-10-29T10:00:00.00+01:00',
      end_time: '2023-10-29T12:00:00.00+01:00',
      machine: '1',
   },
];

export const reservationStore = writable<ReservationStoreData>(null);

const sortReservations = (reservations: Reservation[]): Reservation[] => {
   return reservations?.sort((reservationA, reservationB) =>
      reservationA.startTime.isBefore(reservationB.startTime) ? -1 : 1
   );
};

const filterReservations =
   (dateToFilterFor: Date) =>
   (reservation: Reservation): boolean => {
      const now = new Date();
      let isValid = dateToFilterFor.isSameDay(reservation.startTime);
      if (now.isSameDay(dateToFilterFor)) {
         isValid = isValid && reservation.startTime.isBefore(now);
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
   reservationStore.set({ reservations, for: date });
};

export const createReservation = async (
   user: string,
   machine: string,
   startTime: Date,
   endTime: Date
): Promise<void> => {
   post<ReservationDto>('/reservations', {
      owner: user,
      start_time: startTime.toISOString(),
      end_time: endTime.toISOString(),
      machine,
   }).then((json) => {
      reservationStore.update((storeData) => {
         if (storeData) {
            return {
               ...storeData,
               reservations: sortReservations([
                  ...(storeData?.reservations ?? []),
                  mapDtoToReservation(json),
               ]),
            };
         }
         return null;
      });
   });
};
