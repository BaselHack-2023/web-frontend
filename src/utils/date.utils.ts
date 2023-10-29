export const timestampToDate = (timestamp: number): Date => {
   return new Date(timestamp * 1000);
};

export const newDateWithTime = (date: Date, time: string): Date => {
   const newDate = new Date(date);
   const hoursMinuteTuple = time.split(':');
   newDate.setHours(
      parseInt(hoursMinuteTuple[0]),
      parseInt(hoursMinuteTuple[1])
   );

   return newDate;
};
