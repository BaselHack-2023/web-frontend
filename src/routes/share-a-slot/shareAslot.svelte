<script lang="ts">
   import { Router, Route, Link } from 'svelte-routing';

   let size = '';
   let SelectionColor = 'Sock';
	let OptionColor = [
		'Sock',
		'Underwear',
		'T-shirt', 'Shirt', 'Trousers', 'Jacket'
	]

   let SelectionProgram= 'Sock';
	let OptionProgram = [
		'Sock',
		'Underwear',
		'T-shirt', 'Shirt', 'Trousers', 'Jacket'
	]

   $: console.log('Changed selected:', SelectionProgram)
	$: console.log('Updated options:', OptionProgram)
</script>

<div class="boxes">
   <div>Define your cloths for the shared laundry</div>
   <div></div>
</div>


Color: <select bind:value={SelectionColor}>
	{#each OptionColor as value}<option {value}>{value}</option>{/each}
</select>

Laundry Program: <select bind:value={SelectionProgram}>
	{#each OptionProgram as value}<option {value}>{value}</option>{/each}
</select>

 Temperature: <input bind:value={size} placeholder="enter the size" />

Amount: <input bind:value={size} placeholder="enter the cloth amount you have" />

<style>
   .boxes {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }
</style>
