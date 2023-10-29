import { writable } from 'svelte/store';
import { get, post } from '../utils/rest.utils';
import {
   mapDtoToReservation,
   type Reservation,
   type ReservationDto,
   type ReservationStoreData,
} from './reservation.model';

let cachedReservations: ReservationStoreData | null;

export const reservationStore = writable<ReservationStoreData>(null);

const sortReservations = (reservations: Reservation[]): Reservation[] => {
   return reservations?.sort((reservationA, reservationB) =>
      reservationA.startTime.isBefore(reservationB.startTime) ? -1 : 1
   );
};

const filterReservations =
   (dateToFilterFor: Date) =>
   (reservation: Reservation): boolean => {
      let isValid = dateToFilterFor.isSameDay(reservation.startTime);
      return isValid;
   };

// public methods

export const loadReservationsForDay = (date: Date): void => {
   if (!cachedReservations?.for.isSameDay(date)) {
      get<{ data: ReservationDto[] }>('/reservations').then((response) => {
         const reservations = sortReservations(
            response.data
               .map(mapDtoToReservation)
               .filter(filterReservations(date))
         );
         const storeData = { reservations, for: date };
         cachedReservations = storeData;
         reservationStore.set(storeData);
      });
   }
};

export const createReservation = async (
   user: string,
   machine: string,
   startTime: Date,
   endTime: Date
): Promise<void> => {
   post<ReservationDto>('/reservations', {
      owner: user,
      start_time: startTime.toBeutlerSpecialString(),
      end_time: endTime.toBeutlerSpecialString(),
      machine,
      shared: false,
   }).then((json) => {
      reservationStore.update((storeData) => {
         if (storeData) {
            return {
               ...storeData,
               reservations: sortReservations([
                  ...(storeData?.reservations ?? []),
                  mapDtoToReservation(json.data),
               ]),
            };
         }
         return null;
      });
   });
};
