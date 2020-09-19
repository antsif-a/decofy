import { Command, CommandOptions } from '../bot/commands';
import { Initializable } from '../bot/interfaces';
import { Bot } from '../bot';

export class Annotations {
    static bot(prefix: string): ClassDecorator {
        return (target: Object) => {
            if (this.isBot(target)) {
                const bot = target as Bot;
                this.checkInitialization(bot);

                bot.commands.setPrefix(prefix);

                console.log('@Bot.bot() executed.');
            }
        };
    }

    static command(options: CommandOptions = {}): MethodDecorator {
        return (target: Object, key: string, descriptor: PropertyDescriptor) => {
            if (this.isBot(target)) {
                const bot = target as Bot;
                this.checkInitialization(bot);

                const command = new Command(options);
                command.name ||= key;
                command.executor ||= descriptor.value;

                bot.commands.add(command);

                console.log(`@Bot.command() new command: ${command.name}.`);
            }
        };
    }

    private static checkInitialization(target: Initializable): void {
        if (!target.isInitialized) target.initialize();
    }

    private static isBot(target: Object): boolean {
        return (target instanceof Bot);
    }
}
