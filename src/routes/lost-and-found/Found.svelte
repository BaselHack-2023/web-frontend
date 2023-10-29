<script lang="ts">
   // logic
   import { Router, Route, Link } from 'svelte-routing';
</script>

<div class="boxes">
   <div>Please, upload a picture of the item:</div>
   <div></div>
</div>

<div class="boxes">
   <div> <nav>
      <Link to="/lost-and-found/ThanksForUploading.svelte">Image is uploaded.</Link>
    </nav></div>
</div>

<style>
   .boxes {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }
</style>

