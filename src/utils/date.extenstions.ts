export {};

declare global {
   interface Date {
      addHours(hours: number): Date;
      addDays(days: number): Date;
      isSameDay(otherDate: Date): boolean;
      toWeekdayString(): string;
      toTime(): string;
      toShortISOString(): string;
      isAfter(otherDate: Date): boolean;
      isBefore(otherDate: Date): boolean;
   }
}

Date.prototype.addHours = function (hours: number) {
   this.setTime(this.getTime() + hours * 60 * 60 * 1000);
   return this;
};

Date.prototype.addDays = function (days: number) {
   this.setDate(this.getDate() + days);
   return this;
};

Date.prototype.isSameDay = function (otherDate: Date): boolean {
   var thisDateStr = this.toISOString().slice(0, 10);
   var otherDateStr = otherDate.toISOString().slice(0, 10);

   return thisDateStr === otherDateStr;
};

Date.prototype.toWeekdayString = function (): string {
   return this.toLocaleDateString('en-us', {
      day: '2-digit',
      month: 'short',
      weekday: 'long',
   });
};

Date.prototype.toTime = function (): string {
   return this.toLocaleTimeString('de-ch', {
      hour: '2-digit',
      minute: '2-digit',
   });
};

Date.prototype.isAfter = function (otherDate: Date): boolean {
   return this.getTime() < otherDate.getTime();
};

Date.prototype.isBefore = function (otherDate: Date): boolean {
   return this.getTime() > otherDate.getTime();
};

Date.prototype.toShortISOString = function (): string {
   return this.toISOString().split('T')[0];
};
