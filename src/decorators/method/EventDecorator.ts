import { ClientEvents } from 'discord.js';
import { Controller, Initializable } from '../../bot/core';

export function eventDecorator(event?: keyof ClientEvents): MethodDecorator {
    return (target: unknown, key: string, descriptor: PropertyDescriptor) => {
        if (Controller.isController(target)) {
            Initializable.checkInitialization(target);
            target.client.on(event || key, descriptor.value);
        }

        return target;
    };
}
