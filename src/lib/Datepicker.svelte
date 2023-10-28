<script lang="ts">
   export let label: string = 'Select a date please';
   export let date: Date;
</script>

<div>
   <label for="date">{label}</label>
   <input type="date" name="date" bind:value={date} />
</div>

<style>
   div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
   }

   label {
      margin-bottom: 0.25rem;
   }
</style>
