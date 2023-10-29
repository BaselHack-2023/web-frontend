<script lang="ts">
   // logic
   import { navigate } from 'svelte-routing';
   import { get } from 'svelte/store';
   import { userStore } from '../../model/user.store';
   let size = '';
   let SelectionItem = '';
	let OptionItem = [
		'Sock',
		'Underwear',
		'T-shirt', 'Shirt', 'Trousers', 'Jacket'
	]

   let group = 1;
   let SelectionColor = [];
	let OptionColor = ['white','black','red','blue','green','yellow','orange','purple']

   $: if(!!size && !!SelectionItem && !!SelectionColor)
      console.log('filled out')
   

   $: console.log('Changed selected:', SelectionItem)
	$: console.log('Updated options:', OptionItem)

   $: console.log('Changed selected:', SelectionColor)
	$: console.log('Updated options:', OptionColor)

   const redirectToUploaded = async () => {
      const data = {
         name: SelectionItem,
         colors: SelectionColor.join(','),
         size: size,
         owner: get(userStore).id
      };
      const response = await fetch('https://api.iperka.com/items', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
      });
      if (response.ok) {
         navigate('/lost-and-found/LostUploaded.svelte');
      } else {
         console.error('Failed to upload lost item');
      }
   };

 </script>

<div class="mainContainer">
   <h1>Define your lost item</h1>
   <div></div>
</div>

<div class="itemSection">
   <p class="sectionTitle">Item</p> 
   <select bind:value={SelectionItem}>
      {#each OptionItem as value}<option {value}>{value}</option>{/each}
   </select>
</div>

<div class="colorSection">
   <p class="sectionTitle">Color</p>
   <div class="colorboxes">
   
      {#each OptionColor as color}
         <label class="colorboxLabel">
            {color}
            <input type="checkbox" bind:group={SelectionColor} value={color} class="colorboxInput"/>
         </label>
      {/each}
   </div>
</div>


<div class="sizeSection">
   <p class="sectionTitle">Size</p>
   <input bind:value={size} placeholder="enter the size" />
</div>

<button on:click={redirectToUploaded}>Upload my lost item.</button>


<style>
   .mainContainer {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }

   .itemSection {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-bottom: 50px;
   }

   .colorSection {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-bottom: 50px;
   }

   .sizeSection {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-bottom: 50px;
   }

   .sectionTitle {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
   }

   .colorboxes {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
   }

   .colorboxLabel {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100px;
   }

   .colorboxInput {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: white;
      margin-left: 5px;
   }

   .colorboxInput:checked {
      background-color: var(--color);
   }
</style>


