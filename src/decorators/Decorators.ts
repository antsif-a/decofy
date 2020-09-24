import { Command, CommandOptions } from '../bot/commands';
import { Controller, Initializable } from '../bot/interfaces';

export class Decorators {
    protected static bot(prefix: string): ClassDecorator {
        return (target: unknown) => {
            if (this.isController(target)) {
                this.checkInitialization(target);
                target.commands.setPrefix(prefix);

                console.log('@Bot.bot() executed.');
            }
        };
    }

    protected static command(options: CommandOptions = {}): MethodDecorator {
        return (target: unknown, key: string, descriptor: PropertyDescriptor) => {
            if (this.isController(target)) {
                this.checkInitialization(target);

                const command = new Command(options);
                command.name ||= key;
                command.executor ||= descriptor.value;

                target.commands.add(command);

                console.log(`@Bot.command() new command: ${command.name}.`);
            }
        };
    }

    private static checkInitialization(target: Initializable): void {
        if (!target.isInitialized) target.initialize();
    }

    private static isController(target: unknown): target is Controller {
        return (target as Controller).client !== undefined;
    }
}
