import {printBold} from './animation';
export let snacks: string[] = ["chips", "guacamole", "veggie plate", "chocolate", "banana", "brownies", "Doritos"];

export function displaySnacks(snackList: string[]): void{
	printBold('Party Time!! Snacks:');
	console.log(snackList);
}


