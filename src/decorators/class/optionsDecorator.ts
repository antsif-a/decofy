import { ClientOptions, Util } from 'discord.js';
import { Structs } from 'util/structs';

export function optionsDecorator(options: ClientOptions): ClassDecorator {
    return <T extends Function>(target: T) => {
        if (Structs.isController(target.prototype)) {
            const { client } = target.prototype;
            client.options = Util.mergeDefault(client.options, options);
        }

        return target;
    };
}
