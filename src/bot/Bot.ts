import { Client, ClientEvents, ClientOptions } from 'discord.js';
import { CommandOptions, Commands } from './commands';
import { Controller } from './core';
import {
    optionsDecorator,
    prefixDecorator,
    commandDecorator,
    eventDecorator,
} from '../decorators';

export abstract class Bot extends Controller {
    constructor(token: string) {
        super();
        void this.client.login(token);
    }

    initialize(): void {
        super.initialize();
        this.client = new Client();
        this.commands = new Commands(this.client);
    }

    protected static prefix(prefix: string): ClassDecorator {
        return prefixDecorator(prefix);
    }

    protected static options(options: ClientOptions): ClassDecorator {
        return optionsDecorator(options);
    }

    protected static command(options: CommandOptions = {}): MethodDecorator {
        return commandDecorator(options);
    }

    protected static on(event?: keyof ClientEvents): MethodDecorator {
        return eventDecorator(event);
    }
}
