import { Command, CommandOptions } from '../../bot/commands';
import { Controller, Initializable } from '../../bot/core';
import { CommandExistsError } from '../../bot/errors';

export function commandDecorator(options?: CommandOptions): MethodDecorator {
    return (target: unknown, key: string, descriptor: PropertyDescriptor) => {
        if (Controller.isController(target)) {
            Initializable.checkInitialization(target);

            const command = Command.create(options);
            command.name ||= key;
            command.executor ||= descriptor.value;

            if (target.commands.contains(command.name)) {
                throw new CommandExistsError(key);
            }

            target.commands.add(command);
        }

        return target;
    };
}
