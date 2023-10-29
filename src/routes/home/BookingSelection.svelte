<script lang="ts">
   import { navigate } from 'svelte-routing';
   import { loadReservationsForDay } from '../../model/reservation.store';

   const redirectToBookLater = () => {
      navigate('/calendar');
   };

   const redirectToBookNow = () => {
      loadReservationsForDay(new Date());
      navigate('/calendar');
   };
</script>

<h1>When would you like to wash?</h1>
<button on:click={redirectToBookNow}>Get next available slot</button>
<button on:click={redirectToBookLater}>Check for other day</button>
