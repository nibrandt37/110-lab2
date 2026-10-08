import {printBold} from './animation.ts';
export let snacks: string[] = ["chips", "guacamole", "veggie plate", "chocolate"];

export function displaySnacks(snackList: string[]): void{
	printBold('Party Time! Snacks:');
	console.log(snackList);
}


