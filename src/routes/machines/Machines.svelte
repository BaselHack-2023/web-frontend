<script lang="ts">
   import { loadAllMachines, machineStore } from '../../model/machine.store';

   loadAllMachines();
</script>

<h1>Machines for: Bieberweg 1</h1>
<div class="grid">
   {#each $machineStore ?? [] as machine}
      <article class={machine.status}>
         <header>{machine.name}</header>
         <div class="body">
            <h6>Free slots for today:</h6>
            <button>17:30 - 18:30</button>
            <button>19:30 - 20:30</button>
         </div>
         <footer>
            {#if machine.status === 'running'}
               <small>Finishes at: {machine.eta.toTime()}</small>
            {:else}
               <small>Available</small>
            {/if}
         </footer>
      </article>
   {/each}
</div>

<style>
   .body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }

   footer {
      height: 50px;
      padding: 8px 0;
   }

   .idle footer {
      color: black;
      background-color: #8bc34a;
   }

   .running footer {
      background-color: #f6685e;
   }
</style>
