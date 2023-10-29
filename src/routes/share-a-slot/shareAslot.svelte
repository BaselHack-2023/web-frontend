<script lang="ts">
   import { navigate } from 'svelte-routing';
   let size = '';
   let amount = '';
   let SelectionColor = 'Sock';
	let OptionColor = [
		'White',
		'Black',
		'Yellow', 'Orange', 'Red', 'Blue', 'Green','Grey'
	]

   let SelectionProgram= 'Sock';
	let OptionProgram = [
		'Light',
		'Wool',
		'Intensive'
	]

   $: console.log('Changed selected:', SelectionProgram)
	$: console.log('Updated options:', OptionProgram)

   const redirectToUp = () => {
      navigate('/share-a-slot/shareUploaded.svelte');
   };
</script>


<h1>Define your cloths for the shared laundry</h1>



Color: <select bind:value={SelectionColor}>
	{#each OptionColor as value}<option {value}>{value}</option>{/each}
</select>

Laundry Program: <select bind:value={SelectionProgram}>
	{#each OptionProgram as value}<option {value}>{value}</option>{/each}
</select>

Temperature: <input bind:value={size} placeholder="enter the temperature" />

Amount: <input bind:value={amount} placeholder="enter the amount of cloths you have" />

<button on:click={redirectToUp}>Upload my share request.</button>
