import { ClientEvents } from 'discord.js';
import { Controller, Initializable } from '../bot/core';

export function eventDecorator(event?: keyof ClientEvents): MethodDecorator {
    return (target: Controller, key: string, descriptor: PropertyDescriptor) => {
        Initializable.checkInitialization(target);
        target.client.on(event || key, descriptor.value);
    };
}
