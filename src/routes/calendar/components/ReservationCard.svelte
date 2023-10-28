<script lang="ts">
   import type { Reservation } from '../../../model/reservation.model';
   import { convertToTime } from '../../../utils/date.utils';

   export let reservation: Reservation;
</script>

<article>
   <h3>
      {convertToTime(reservation.startTime)} -
      {convertToTime(reservation.endTime)}
   </h3>
</article>
