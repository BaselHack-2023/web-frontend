<script lang="ts">
   // logic
   import { navigate } from 'svelte-routing';
   let size = '';
   let SelectionItem = 'Sock';
	let OptionItem = [
		'Sock',
		'Underwear',
		'T-shirt', 'Shirt', 'Trousers', 'Jacket'
	]

   let SelectionColor = 'Sock';
	let OptionColor = [
		'White',
		'Black',
		'Yellow', 'Orange', 'Red', 'Blue', 'Green','Grey'
	]

   $: if(!!size && !!SelectionItem && !!SelectionColor)
      console.log('filled out')
   

   $: console.log('Changed selected:', SelectionItem)
	$: console.log('Updated options:', OptionItem)

   $: console.log('Changed selected:', SelectionColor)
	$: console.log('Updated options:', OptionColor)

   const redirectToUploaded = () => {
      navigate('/lost-and-found/LostUploaded.svelte');
   };

 </script>

<div class="boxes">
   <div>Define your lost item</div>
   <div></div>
</div>

<div>
Item: <select bind:value={SelectionItem}>
	{#each OptionItem as value}<option {value}>{value}</option>{/each}
</select></div>

<div>
Color: <select bind:value={SelectionColor}>
	{#each OptionColor as value}<option {value}>{value}</option>{/each}
</select></div>

<div>
Size: <input bind:value={size} placeholder="enter the size" /></div>

<button on:click={redirectToUploaded}>Upload my lost item.</button>


<style>
   .boxes {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }
</style>


