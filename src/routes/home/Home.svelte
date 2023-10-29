<script lang="ts">
   import Teapot from '../../lib/Teapot.svelte';
   import {
      loadUserByApartmentNumber,
      userStore,
   } from '../../model/user.store';
   import BookingSelection from './BookingSelection.svelte';

   let apartmentNumber: number | undefined;

   const onApartmentNumberBlur = () => {
      if (apartmentNumber) {
         loadUserByApartmentNumber(apartmentNumber);
      }
   };
</script>

{#if !$userStore}
   <h1>¡Hola soy una tetera 🫖!</h1>

   <label for="apartment-nr">
      Please enter your apartment number:
      <input
         bind:value={apartmentNumber}
         on:blur={onApartmentNumberBlur}
         type="number"
         name="apartment-nr"
         placeholder="Apartment number"
      />
   </label>
{:else}
   <BookingSelection />
{/if}

<Teapot isItTeatime={apartmentNumber} />
