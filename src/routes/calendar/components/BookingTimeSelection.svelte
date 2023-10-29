<script lang="ts">
   import { createEventDispatcher } from 'svelte';
   import { get } from 'svelte/store';
   import { DEFAULT_BOOKING_HOURS } from '../../../consts';
   import { createReservation } from '../../../model/reservation.store';
   import { userStore } from '../../../model/user.store';
   import { newDateWithTime } from '../../../utils/date.utils';

   export let selecedDate: Date;
   export let availableUntil: Date;
   export let availableFrom: Date;

   const dispatch = createEventDispatcher();

   let timeStr: string = availableFrom.toTime();
   let startTime: Date;
   let endTime: Date;

   $: if (timeStr) startTime = newDateWithTime(selecedDate, timeStr);
   $: if (startTime)
      endTime = new Date(startTime).addHours(DEFAULT_BOOKING_HOURS);

   const cancelBooking = () => dispatch('cancelBooking');
   const addBooking = () => {
      const user = get(userStore);
      if (user) {
         createReservation(user.id, startTime, endTime);
      }
   };
</script>

<div class="booking-container">
   <label for="time">
      Start time
      <input
         type="time"
         name="time"
         placeholder="Start time"
         bind:value={timeStr}
      />
   </label>
   {#if endTime}
      <p>End time: {endTime.toTime()}</p>
   {/if}
   <div class="button-container">
      <button on:click={cancelBooking}>Cancel booking</button>
      <button on:click={addBooking}>Confirm booking</button>
   </div>
</div>

<style>
   .button-container {
      display: flex;
      column-gap: 1rem;
   }
</style>
