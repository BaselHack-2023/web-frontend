<script lang="ts">
   import { navigate } from 'svelte-routing';
   import { reservationStore } from '../../model/reservation.store';

   const redirectToBookLater = () => {
      reservationStore.set(null);
      navigate('/calendar');
   };

   const redirectToBookNow = () => {
      navigate('/machines');
   };
</script>

<h1>When would you like to wash?</h1>
<button on:click={redirectToBookNow}>Book now</button>
<button on:click={redirectToBookLater}>View schedule</button>
