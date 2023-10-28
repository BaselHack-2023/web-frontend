<script lang="ts">
   import {
      DEFAULT_DAY_END,
      DEFAULT_DAY_START,
      ONE_HOUR_IN_MS,
   } from '../../consts';
   import Datepicker from '../../lib/Datepicker.svelte';
   import type { Reservation } from '../../model/reservation.model';
   import {
      loadReservationsForDay,
      reservationStore,
   } from '../../model/reservation.store';
   import Booking from './components/Booking.svelte';
   import ReservationCard from './components/ReservationCard.svelte';

   let pickedDate: Date;
   let hasReservations: boolean = false;
   let reservations: Reservation[];

   $: selecedDate = !!pickedDate ? new Date(pickedDate) : undefined;
   $: if (selecedDate) loadReservationsForDay(selecedDate);

   reservationStore.subscribe((allReservations) => {
      hasReservations = !!allReservations && allReservations?.length > 0;
      if (hasReservations) {
         reservations = allReservations!;
      }
   });

   const getAvailableUntil = (index: number): Date => {
      let defaultEnd = getPickedDateWithTime(DEFAULT_DAY_END);

      if (index < reservations.length) {
         const nextReservation = reservations.at(index + 1);
         return nextReservation?.startTime ?? defaultEnd;
      }

      return defaultEnd;
   };

   const showBookingButton = (from: Date, until: Date) => {
      return until.getTime() - from.getTime() >= ONE_HOUR_IN_MS;
   };

   const getPickedDateWithTime = (time: number): Date => {
      let date = new Date(pickedDate);
      date.setHours(time);
      return date;
   };
</script>

<Datepicker
   bind:date={pickedDate}
   label="On which day would you like to do laundry?"
/>

{#if selecedDate}
   <div class="reservations-container">
      {#if hasReservations}
         <p>Reservations for: {selecedDate.toWeekdayString()}</p>
         {#each reservations as reservation, i (i)}
            <ReservationCard {reservation} />
            {#if showBookingButton(reservation.endTime, getAvailableUntil(i))}
               <Booking
                  {selecedDate}
                  availableFrom={reservation.endTime}
                  availableUntil={getAvailableUntil(i)}
               />
            {/if}
         {/each}
      {:else}
         <p>There are no reservations for: {selecedDate.toWeekdayString()}</p>
         <Booking
            {selecedDate}
            availableFrom={getPickedDateWithTime(DEFAULT_DAY_START)}
            availableUntil={getPickedDateWithTime(DEFAULT_DAY_END)}
         />
      {/if}
   </div>
{/if}
