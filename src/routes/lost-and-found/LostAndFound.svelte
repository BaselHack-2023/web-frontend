<script lang="ts">
   // logic
   import { navigate } from 'svelte-routing';

   let addingBooking: boolean = false;
   const addBooking = () => (addingBooking = true);

   const redirectToLost = () => {
      navigate('/lost-and-found/Lost.svelte');
   };

   const redirectToFound = () => {
      navigate('/lost-and-found/Found.svelte');
   };
</script>

<div class="mainContainer">
   <h1>Have you lost or found the item?</h1>
   <button on:click={redirectToLost}>LOST</button>
   <button on:click={redirectToFound}>FOUND</button>   
</div>

<style>
   .mainContainer {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }
</style>