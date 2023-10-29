<script lang="ts">
   import Datepicker from '../../../lib/Datepicker.svelte';

   export let selecedDate: Date | undefined;
   let pickedDate: string;

   $: selecedDate = !!pickedDate ? new Date(pickedDate) : undefined;

   const nextDay = () => {
      if (!selecedDate) {
         selecedDate = new Date();
      }
      selecedDate.addDays(1);
      pickedDate = selecedDate.toShortISOString();
   };

   const previousDay = () => {
      if (!selecedDate) {
         selecedDate = new Date();
      }
      selecedDate.addDays(-1);
      pickedDate = selecedDate.toShortISOString();
   };
</script>

<div class="date-selector-container">
   <button on:click={previousDay}>Previous day</button>
   <Datepicker
      bind:date={pickedDate}
      label="On which day would you like to do laundry?"
   />
   <button on:click={nextDay}>Next day</button>
</div>

<style>
   .date-selector-container {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
   }

   button {
      width: max-content;
   }
</style>
