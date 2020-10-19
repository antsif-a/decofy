import { ClientEvents } from 'discord.js';
import { Decorator } from './Decorator';
import { Controller, Initializable } from '../bot/core';

export const eventDecorator = <Decorator> function (event?: keyof ClientEvents) {
    return (target: Controller, key: string, descriptor: PropertyDescriptor) => {
        Initializable.checkInitialization(target);
        target.client.on(event || key, descriptor.value);
    };
};
