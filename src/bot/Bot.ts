import { Client, ClientEvents } from 'discord.js';
import { Command, CommandOptions, Commands } from './commands';
import { Controller, Initializable } from './interfaces';

export abstract class Bot implements Controller {
    isInitialized = false;
    client: Client;
    commands: Commands;

    constructor(token: string) {
        void this.client.login(token);
    }

    initialize(): void {
        this.client = new Client();
        this.commands = new Commands(this.client);
        this.isInitialized = true;
    }

    protected static bot(prefix: string): ClassDecorator {
        return (target: unknown) => {
            if (this.isController(target)) {
                this.checkInitialization(target);
                target.commands.setPrefix(prefix);
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
            }
        };
    }

    protected static on(event?: keyof ClientEvents): MethodDecorator {
        return (target: unknown, key: string, descriptor: PropertyDescriptor) => {
            if (this.isController(target)) {
                this.checkInitialization(target);
                target.client.on(event || key, descriptor.value);
            }
        };
    }

    private static checkInitialization(target: Initializable): void {
        if (!target.isInitialized) target.initialize();
    }

    private static isController(target: unknown): target is Bot {
        return target instanceof Bot;
    }
}
