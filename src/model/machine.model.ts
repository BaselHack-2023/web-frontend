export interface MachineDto {
   id: string; // uuid
   name: string;
   property: string;
   status: string;
   eta: string;
}

export interface Machine {
   id: string; // uuid
   name: string;
   property: string;
   status: string;
   eta: Date;
}

export type MachineStoreData = Machine[] | null;

export const mapDtoToMachine = (dto: MachineDto): Machine => {
   return {
      ...dto,
      eta: new Date(dto.eta),
   };
};
