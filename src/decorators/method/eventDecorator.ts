import { ClientEvents } from 'discord.js';
import { Structs } from 'util/structs';

export function eventDecorator(event?: keyof ClientEvents): MethodDecorator {
    return (target: unknown, key: string, descriptor: PropertyDescriptor) => {
        if (Structs.isBot(target)) {
            Structs.requireInit(target);
            target.client.on(event || key, descriptor.value);
        }

        return target;
    };
}
