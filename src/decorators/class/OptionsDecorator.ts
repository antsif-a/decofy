import { ClientOptions } from 'discord.js';
import { Structs } from '../../util';

export function optionsDecorator(options: ClientOptions): ClassDecorator {
    return <T extends Function>(target: T) => {
        if (Structs.isController(target.prototype)) {
            target.prototype.setOptions(options);
        }
    };
}
