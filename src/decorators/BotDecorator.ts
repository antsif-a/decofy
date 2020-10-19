import { Decorator } from './Decorator';
import { Controller, Initializable } from '../bot/core';

export const botDecorator = <Decorator> function (prefix: string) {
    return (target: Controller) => {
        if (Controller.isController(target)) {
            Initializable.checkInitialization(target);
            target.commands.setPrefix(prefix);
            console.log('Set prefix');
        }
    };
};
