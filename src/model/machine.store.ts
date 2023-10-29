import { writable } from 'svelte/store';
import { get } from '../utils/rest.utils';
import {
   mapDtoToMachine,
   type MachineDto,
   type MachineStoreData,
} from './machine.model';

export const machineStore = writable<MachineStoreData>(null);

export const loadAllMachines = async () => {
   get<{ data: MachineDto[] }>('/machines').then((response) => {
      const machines = response.data.map(mapDtoToMachine);
      machineStore.set(machines);
   });
};
