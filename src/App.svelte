<script lang="ts">
   import '@picocss/pico/css/pico.min.css';
   import { Link, Route, Router } from 'svelte-routing';
   import Calendar from './routes/calendar/Calendar.svelte';
   import LostAndFound from './routes/lost-and-found/LostAndFound.svelte';
   import './utils/date.extenstions';
</script>

<Router>
   <nav>
      <Link to="/">Calendar</Link>
      <Link to="/lost-and-found">Blog</Link>
   </nav>
   <main>
      <Route path="/lost-and-found" component={LostAndFound} />
      <Route path="/"><Calendar /></Route>
   </main>
</Router>

<style>
   main {
      min-width: 800px;
   }
</style>
