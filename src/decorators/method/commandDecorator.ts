import { Command, CommandOptions } from 'bot/commands/command';
import { Structs } from 'util/structs';

export function commandDecorator(options?: CommandOptions): MethodDecorator {
    return (target: unknown, key: string, descriptor: PropertyDescriptor) => {
        if (Structs.isController(target)) {
            Structs.checkInitialization(target);

            const command = Command.create(options);
            command.name ||= key;
            command.executor ||= descriptor.value;

            if (target.commands.contains(command.name)) {
                throw new Error(`Command with name '${command.name}' already exists.`);
            }

            target.commands.add(command);
        }

        return target;
    };
}
