import { ClientOptions } from 'discord.js';
import { Controller } from '../bot/core';

export function optionsDecorator(options: ClientOptions): ClassDecorator {
    return <T extends Function>(target: T) => {
        if (Controller.isController(target.prototype)) {
            target.prototype.setOptions(options);
        }
    };
}
