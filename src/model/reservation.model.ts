export interface Reservation {
   id: string;
   owner: string;
   startTime: number; //timestamp
   endTime: number; //timestamp
}

export type ReservationStoreData = Reservation[] | null;
