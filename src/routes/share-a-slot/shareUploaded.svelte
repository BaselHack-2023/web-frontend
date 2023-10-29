<script lang="ts">
    import { navigate } from 'svelte-routing';

    const redirectToLiesa = () => {
      navigate('/share-a-slot/LiesasRequest.svelte');
    };
   const redirectToTim = () => {
      navigate('/share-a-slot/LiesasRequest.svelte');
   };
</script>

<h1>Thanks for uploading your request.</h1>

<h2>The following request could be of interst for you:</h2>

<button on:click={redirectToLiesa}>Liesa, tomorrow (30.10.23), 2 - 3 p.m.</button>

<button on:click={redirectToTim}>Tim, Wed. (03.11.23), 5 - 6 p.m.</button>
