<script lang="ts">
   import {
      DEFAULT_DAY_END,
      DEFAULT_DAY_START,
      ONE_HOUR_IN_MS,
   } from '../../consts';
   import type { Reservation } from '../../model/reservation.model';
   import {
      loadReservationsForDay,
      reservationStore,
   } from '../../model/reservation.store';
   import Booking from './components/Booking.svelte';
   import DateSelector from './components/DateSelector.svelte';
   import ReservationCard from './components/ReservationCard.svelte';

   let selecedDate: Date | undefined;
   let hasReservations: boolean = false;
   let reservations: Reservation[];

   $: if (selecedDate) loadReservationsForDay(selecedDate);

   reservationStore.subscribe((storeData) => {
      hasReservations = !!storeData && storeData?.reservations.length > 0;
      selecedDate = storeData?.for;
      if (hasReservations) {
         reservations = storeData!.reservations;
      }
   });

   const getAvailableUntil = (index: number): Date => {
      let defaultEnd = getSelectedDateWithTime(DEFAULT_DAY_END);

      if (index < reservations.length) {
         const nextReservation = reservations.at(index);
         return nextReservation?.startTime ?? defaultEnd;
      }

      return defaultEnd;
   };

   const showBookingButton = (from: Date, until: Date) => {
      return until.getTime() - from.getTime() >= ONE_HOUR_IN_MS;
   };

   const getSelectedDateWithTime = (time: number): Date => {
      let date = new Date();
      if (selecedDate?.isToday()) {
         date.setHours(date.getHours(), date.getMinutes() + 1, 0);
      } else {
         date = new Date(selecedDate!);
         date.setHours(time, 0);
      }
      return date;
   };
</script>

<DateSelector bind:selecedDate />

{#if selecedDate}
   <div class="reservations-container">
      {#if hasReservations}
         <p>Reservations for: {selecedDate.toWeekdayString()}</p>
         <Booking
            {selecedDate}
            availableFrom={getSelectedDateWithTime(DEFAULT_DAY_START)}
            availableUntil={getAvailableUntil(0)}
         />
         {#each reservations as reservation, i (i)}
            <ReservationCard {reservation} />
            {#if showBookingButton(reservation.endTime, getAvailableUntil(i + 1))}
               <Booking
                  {selecedDate}
                  availableFrom={reservation.endTime}
                  availableUntil={getAvailableUntil(i + 1)}
               />
            {/if}
         {/each}
      {:else}
         <p>There are no reservations for: {selecedDate.toWeekdayString()}</p>
         <Booking
            {selecedDate}
            availableFrom={getSelectedDateWithTime(DEFAULT_DAY_START)}
            availableUntil={getSelectedDateWithTime(DEFAULT_DAY_END)}
         />
      {/if}
   </div>
{/if}
