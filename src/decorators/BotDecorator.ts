import { Controller } from '../bot/core';

export function botDecorator(prefix: string): ClassDecorator {
    return <T extends Function>(target: T) => {
        if (Controller.isController(target.prototype)) {
            target.prototype.commands.setPrefix(prefix);
        }

        return target;
    };
}
