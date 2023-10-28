import { timestampToDate } from '../utils/date.utils';

export interface ReservationDto {
   id: string;
   owner: string;
   startTime: number; //timestamp
   endTime: number; //timestamp
}

export interface Reservation {
   id: string;
   owner: string;
   startTime: Date;
   endTime: Date;
}

export type ReservationStoreData = Reservation[] | null;

export const mapDtoToReservation = (dto: ReservationDto): Reservation => {
   return {
      ...dto,
      startTime: timestampToDate(dto.startTime),
      endTime: timestampToDate(dto.endTime),
   };
};
