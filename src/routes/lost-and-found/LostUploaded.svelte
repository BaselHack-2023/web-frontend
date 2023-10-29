<script lang="ts">
   // logic
   import { navigate } from 'svelte-routing';
   const redirectToFoundDB = () => {
      navigate('/lost-and-found/SearchInFound.svelte');
   };
 </script>


<div class="mainContainer">
   <h1>Your item is uploaded into the LOST-Database.</h1>
   <div></div>
</div>

<div class="boxes">
   <div></div>
   <div>You will receive a notification, if your item is found.</div>
</div>

<button on:click={redirectToFoundDB}>Search yourself in the LOST-Database.</button>



<style>
   .mainContainer {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }

   .boxes {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }
</style>