import { Controller } from '../bot/core';

export function botDecorator(prefix: string): ClassDecorator {
    return (target: Function) => {
        if (Controller.isController(target)) {
            target.prototype.commands.setPrefix(prefix);
        }
    };
}
