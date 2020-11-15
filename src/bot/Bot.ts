import { Client, ClientEvents } from 'discord.js';
import { CommandOptions, Commands } from './commands';
import { Controller } from './core';
import { botDecorator, commandDecorator, eventDecorator } from '../decorators';

export abstract class Bot extends Controller {
    constructor(token: string) {
        super();
        void this.client.login(token);
    }

    initialize(): void {
        this.client = new Client();
        this.commands = new Commands(this.client);
        this.isInitialized = true;
    }

    protected static bot(prefix: string): ClassDecorator {
        return botDecorator(prefix);
    }

    protected static command(options: CommandOptions = {}): MethodDecorator {
        return commandDecorator(options);
    }

    protected static on(event?: keyof ClientEvents): MethodDecorator {
        return eventDecorator(event);
    }
}
