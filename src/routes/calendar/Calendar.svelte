<script lang="ts">
   import Datepicker from '../../lib/Datepicker.svelte';

   let pickedDate: Date;
</script>

<p>{pickedDate}</p>
<Datepicker bind:date={pickedDate} />
