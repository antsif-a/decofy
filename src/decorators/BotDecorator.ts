import { Controller, Initializable } from '../bot/core';

export function botDecorator(prefix: string): ClassDecorator {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return (target: Function) => {
        if (Controller.isController(target)) {
            Initializable.checkInitialization(target);
            target.commands.setPrefix(prefix);
            console.log('Set prefix');
        }
    };
}
