<script lang="ts">
   import { reservationStore } from '../../../model/reservation.store';
   import BookingTimeSelection from './BookingTimeSelection.svelte';

   export let selecedDate: Date;
   export let availableUntil: Date;
   export let availableFrom: Date;

   let addingBooking: boolean = false;

   const addBooking = () => (addingBooking = true);
   const cancelBooking = () => (addingBooking = false);

   reservationStore.subscribe(() => cancelBooking());
</script>

<article>
   {#if !addingBooking}
      <button on:click={addBooking}>Add Booking</button>
   {:else}
      <BookingTimeSelection
         {selecedDate}
         {availableFrom}
         {availableUntil}
         on:cancelBooking={cancelBooking}
      />
   {/if}
</article>
