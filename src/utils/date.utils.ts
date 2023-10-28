export const timestampToDate = (timestamp: number): Date => {
   return new Date(timestamp * 1000);
};

export const isSameDay = (dateA: Date, dateB: Date) => {
   var dateAStr = dateA.toISOString().slice(0, 10);
   var dateBStr = dateB.toISOString().slice(0, 10);

   return dateAStr === dateBStr;
};

export const convertToDateString = (date: Date) =>
   date.toLocaleDateString('en-us', {
      day: '2-digit',
      month: 'short',
      weekday: 'long',
   });

export const convertToTime = (date: Date) =>
   date.toLocaleTimeString('de-ch', {
      hour: '2-digit',
      minute: '2-digit',
   });
