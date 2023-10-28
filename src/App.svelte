<script lang="ts">
   import '@picocss/pico/css/pico.min.css';
   import { Link, Route, Router } from 'svelte-routing';
   import Calendar from './routes/calendar/Calendar.svelte';
   import LostAndFound from './routes/lost-and-found/LostAndFound.svelte';
   import Found from './routes/lost-and-found/Found.svelte';
   import Lost from './routes/lost-and-found/Lost.svelte';
   import LostUploaded from './routes/lost-and-found/LostUploaded.svelte';
   import SearchInFound from './routes/lost-and-found/SearchInFound.svelte';
   import ThanksForUploading from './routes/lost-and-found/ThanksForUploading.svelte';
</script>

<Router>
   <nav>
      <Link to="/">Calendar</Link>
      <Link to="/lost-and-found/LostAndFound.svelte">Lost&Found</Link>
   </nav>
   <main>
      <Route path="/lost-and-found/ThanksForUploading.svelte" component={ThanksForUploading} />
      <Route path="/lost-and-found/SearchInFound.svelte" component={SearchInFound} />
      <Route path="/lost-and-found/LostUploaded.svelte" component={LostUploaded} />
      <Route path="/lost-and-found/Found.svelte" component={Found} />
      <Route path="/lost-and-found/Lost.svelte" component={Lost} />
      <Route path="/lost-and-found/LostAndFound.svelte" component={LostAndFound} />
      <Route path="/"><Calendar /></Route>
   </main>
</Router>
