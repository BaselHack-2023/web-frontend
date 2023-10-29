export interface StartEndTimeDto {
   start_time: string; //timestamp
   end_time: string; //timestamp
}

export interface StartEndTime {
   startTime: Date;
   endTime: Date;
}

export const startEndTimeDtoMapper = (dto: StartEndTimeDto): StartEndTime => {
   return {
      startTime: new Date(dto.start_time),
      endTime: new Date(dto.end_time),
   };
};
