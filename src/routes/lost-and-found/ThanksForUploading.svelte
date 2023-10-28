<script lang="ts">
   // logic
   import { Router, Route, Link } from 'svelte-routing';
 </script>

<div class="boxes">
   <div>Thanks for uploading the lost item.</div>
   <div></div>
</div>

<div class="boxes">
   <div> <nav>
      <Link to="/lost-and-found/Found.svelte">Upload a new item.</Link>
    </nav></div>
</div>

<div class="boxes">
   <div> <nav>
      <Link to="/">Return to Homepage.</Link>
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


