<script lang="ts">
   import type { Reservation } from '../../../model/reservation.model';

   export let reservation: Reservation;
</script>

<article>
   <h3>
      {reservation.startTime.toTime()} -
      {reservation.endTime.toTime()}
   </h3>
</article>
