<script lang="ts">
   import { BASE_URL } from '../consts';

   export let isItTeatime: string | undefined;
   let showTeapot: boolean = false;

   $: if (isItTeatime && !isNaN(parseInt(isItTeatime))) {
      showTeapot = parseInt(isItTeatime) === 418;
   }

   const hideTeapot = () => (showTeapot = false);

   const getTeapot = async (): Promise<string> => {
      return fetch(`${BASE_URL}/tea`).then((response: Response) =>
         response.text()
      );
   };
</script>

{#if showTeapot}
   <div class="teapot-modal">
      {#await getTeapot()}
         <h1>Brewing tea 🫖...</h1>
      {:then body}
         <h1>I'm a teapot 🫖</h1>
         <pre>{body}</pre>
         <button on:click={hideTeapot}>Good for you!</button>
      {:catch error}
         <h1>Tea brewed too long and burned 🫖🔥</h1>
         <button on:click={hideTeapot}>Oh no! 😢</button>
      {/await}
   </div>
{/if}

<style>
   .teapot-modal {
      position: absolute;
      background-color: black;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10vh 20vw;
   }

   pre {
      background-color: black;
      width: 100%;
      color: white;
      margin-bottom: 3rem;
   }
</style>
