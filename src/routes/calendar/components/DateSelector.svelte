<script lang="ts">
   import Datepicker from '../../../lib/Datepicker.svelte';

   export let selecedDate: Date | undefined;
   let pickedDate: Date;

   $: selecedDate = !!pickedDate ? new Date(pickedDate) : undefined;
</script>

<div class="date-selector-container">
   <button>Previous day</button>
   <Datepicker
      bind:date={pickedDate}
      label="On which day would you like to do laundry?"
   />
   <button>Next day</button>
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
