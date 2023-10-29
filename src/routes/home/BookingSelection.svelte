<script lang="ts">
   import { navigate } from 'svelte-routing';
   import {
      loadReservationsForDay,
      reservationStore,
   } from '../../model/reservation.store';

   const redirectToBookLater = () => {
      reservationStore.set(null);
      navigate('/calendar');
   };

   const redirectToBookNow = () => {
      loadReservationsForDay(new Date());
      navigate('/calendar');
   };
</script>

<h1>When would you like to wash?</h1>
<button on:click={redirectToBookNow}>Book now</button>
<button on:click={redirectToBookLater}>View schedule</button>
