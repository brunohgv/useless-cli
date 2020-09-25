import { buildLogo } from './presentation/FigletBuilder'
import Logger from './loggers/DefaultLogger'


export function cli(args: string[]) {
    if(args) {
        Logger.success(buildLogo())
    }
}