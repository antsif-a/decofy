import { Decorator } from './Decorator';
import { Command, CommandOptions } from '../bot/commands';
import { Controller, Initializable } from '../bot/core';

export const commandDecorator = <Decorator> function (options?: CommandOptions) {
    return (target: Controller, key: string, descriptor: PropertyDescriptor) => {
        Initializable.checkInitialization(target);
        const command = new Command(options);
        command.name ||= key;
        command.executor ||= descriptor.value;

        target.commands.add(command);
    };
};
