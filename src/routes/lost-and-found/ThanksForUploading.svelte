<script lang="ts">
   // logic
   import { navigate } from 'svelte-routing';

   const redirectToFound = () => {
      navigate('/lost-and-found/Found.svelte');
   };

   const redirectToHome = () => {
      navigate('/');
   };

 </script>


<h1>Thanks for uploading the lost item.</h1>

<button on:click={redirectToHome}>Return to Homepage.</button>
<button on:click={redirectToFound}>Upload a new item.</button>



