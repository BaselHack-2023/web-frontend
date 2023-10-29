import {
   startEndTimeDtoMapper,
   type StartEndTime,
   type StartEndTimeDto,
} from './base.model';

export interface ReservationDto extends StartEndTimeDto {
   id?: string;
   owner: string;
}

export interface Reservation extends StartEndTime {
   id?: string;
   owner: string;
}

export interface ReservationStore {
   reservations: Reservation[];
   for: Date;
}

export type ReservationStoreData = ReservationStore | null;

export const mapDtoToReservation = (dto: ReservationDto): Reservation => {
   return {
      ...dto,
      ...startEndTimeDtoMapper(dto),
   };
};
