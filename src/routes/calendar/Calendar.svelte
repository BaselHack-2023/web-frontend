<script lang="ts">
   import Datepicker from '../../lib/Datepicker.svelte';
   import type { Reservation } from '../../model/reservation.model';
   import {
      loadReservationsForDay,
      reservationStore,
   } from '../../model/reservation.store';
   import { convertToDateString } from '../../utils/date.utils';
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
</script>

<Datepicker bind:date={pickedDate} />

{#if selecedDate}
   <p>{convertToDateString(selecedDate)}</p>
   <div class="reservations-container">
      {#if hasReservations}
         {#each reservations as reservation}
            <ReservationCard {reservation} />
         {/each}
      {:else}
         <p>There are no reservations for today</p>
      {/if}
   </div>
{/if}
