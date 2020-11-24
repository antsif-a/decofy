import { Command, CommandOptions } from '../../bot/commands/Command';
import { Structs } from '../../util/Structs';
import { CommandExistsError } from '../../errors/CommandExistsError';

export function commandDecorator(options?: CommandOptions): MethodDecorator {
    return (target: unknown, key: string, descriptor: PropertyDescriptor) => {
        if (Structs.isController(target)) {
            Structs.checkInitialization(target);

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
