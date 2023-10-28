<script lang="ts">
   import Datepicker from './lib/Datepicker.svelte';

   let pickedDate: Date;
</script>

<main>
   <p>{pickedDate}</p>
   <Datepicker bind:date={pickedDate} />
</main>
