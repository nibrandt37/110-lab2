import { printBold } from "./animation";
export { music, printMusic };

let music: string[] = ["Beauty Sleep", "Rare N' Deluxe", "Northwest zombie girl"];

function printMusic(list: string[]): void {
	printBold("Music Time! Woooo!!");
	console.log(list);
}
