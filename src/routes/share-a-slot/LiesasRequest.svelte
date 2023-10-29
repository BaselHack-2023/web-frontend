<script lang="ts">
    import { navigate } from 'svelte-routing';

    const redirectToLiesaChat = () => {
      navigate('/share-a-slot/LiesasChat.svelte');
   };

</script>

<button>Liesa, tomorrow (30.10.23), 2 - 3 p.m.</button>

Color: <h2> white</h2>

Laundry Program: <h2> Wool </h2>

Temperature: <h2> 30°C </h2>

Amount: <h2> 3 white sweatures </h2>

<button on:click={redirectToLiesaChat}>Contact Liesa</button>

