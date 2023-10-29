<script lang="ts">
   import Teapot from '../../lib/Teapot.svelte';
   import {
      loadUserByApartmentNumber,
      userStore,
   } from '../../model/user.store';
   import BookingSelection from './BookingSelection.svelte';

   let apartmentNumber: string | undefined;

   const onApartmentNumberBlur = () => {
      if (apartmentNumber) {
         loadUserByApartmentNumber(apartmentNumber);
      }
   };

   const onKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Enter') {
         onApartmentNumberBlur();
      }
   };
</script>

{#if !$userStore}
   <h1>Welcome to 3Day T-Shirt</h1>

   <label for="name">
      Please enter your name:
      <input
         bind:value={apartmentNumber}
         on:blur={onApartmentNumberBlur}
         on:keydown={onKeyDown}
         type="text"
         name="name"
         placeholder="Your name"
      />
   </label>
{:else}
   <BookingSelection />
{/if}

<Teapot isItTeatime={apartmentNumber} />
