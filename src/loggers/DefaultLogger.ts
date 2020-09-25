import chalk from 'chalk';
import { ILogger } from './Ilogger';

class DefaultLogger implements ILogger {
    success(message: string): void {
        console.log(chalk.green(message));
    }
    error(message: string): void {
        console.log(chalk.red(message));
    }
    warning(message: string): void {
        console.log(chalk.yellow(message));
    }
}

export default new DefaultLogger;