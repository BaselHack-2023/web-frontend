<script lang="ts">
   import '@picocss/pico/css/pico.min.css';
   import { Link, Route, Router } from 'svelte-routing';
   import Calendar from './routes/calendar/Calendar.svelte';
   import Home from './routes/home/Home.svelte';
   import LostAndFound from './routes/lost-and-found/LostAndFound.svelte';
   import Found from './routes/lost-and-found/Found.svelte';
   import Lost from './routes/lost-and-found/Lost.svelte';
   import LostUploaded from './routes/lost-and-found/LostUploaded.svelte';
   import SearchInFound from './routes/lost-and-found/SearchInFound.svelte';
   import ThanksForUploading from './routes/lost-and-found/ThanksForUploading.svelte';
   import ShareAslot from './routes/share-a-slot/shareAslot.svelte';
   import ShareUploaded from './routes/share-a-slot/shareUploaded.svelte';
   import LiesasRequest from './routes/share-a-slot/LiesasRequest.svelte';
   import LiesasChat from './routes/share-a-slot/LiesasChat.svelte';
   import './utils/date.extenstions';
</script>

<Router>
   <nav>
      <Link to="/">Home</Link>
      <Link to="/calendar">Calendar</Link>
      <Link to="/lost-and-found/LostAndFound.svelte">Lost&Found</Link>
      <Link to="/share-a-slot/shareAslot.svelte">Share a Slot</Link>
   </nav>
   <main>
      <Route
         path="/lost-and-found/ThanksForUploading.svelte"
         component={ThanksForUploading}
      />
      <Route
         path="/lost-and-found/SearchInFound.svelte"
         component={SearchInFound}
      />
      <Route
         path="/lost-and-found/LostUploaded.svelte"
         component={LostUploaded}
      />
      <Route path="/lost-and-found/Found.svelte" component={Found} />
      <Route path="/lost-and-found/Lost.svelte" component={Lost} />
      <Route
         path="/lost-and-found/LostAndFound.svelte"
         component={LostAndFound}
      />
      <Route path="/share-a-slot/shareAslot.svelte" component={ShareAslot} />
      <Route path="/share-a-slot/shareUploaded.svelte" component={ShareUploaded} />
      <Route path="/share-a-slot/LiesasRequest.svelte" component={LiesasRequest} />
      <Route path="/share-a-slot/LiesasChat.svelte" component={LiesasChat} />
      <Route path="/lost-and-found" component={LostAndFound} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/"><Home /></Route>
   </main>
</Router>

<style>
   main {
      min-width: 800px;
   }
</style>
