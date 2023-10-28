<script lang="ts">
   // logic
   import { Router, Route, Link } from 'svelte-routing';
 </script>

<div class="boxes">
   <div>Your item is uploaded into the LOST-Database.</div>
   <div></div>
   <div>You will receive a notification, if your item is found.</div>
</div>

<div class="boxes">
   <div> <nav>
      <Link to="/lost-and-found/SeachInFound.svelte">Search yourself in the FOUND-Database.</Link>
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


