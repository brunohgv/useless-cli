import { Command } from "interfaces/command";

export default class DoNothing implements Command {
    execute(args: string[]): void {
        if (args.length > 0) {
            throw new Error('The method do-nothing does not receives parameters')
        }
        console.log('I am doing nothing');
    }
}