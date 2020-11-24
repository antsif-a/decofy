import {
    ActivityOptions,
    Client,
    ClientEvents,
    ClientOptions,
    PresenceStatusData,
} from 'discord.js';
import { CommandOptions } from 'bot/commands/Command';
import { Commands } from 'bot/commands/Commands';
import { Controller } from 'bot/core/Controller';
import { prefixDecorator } from 'decorators/class/PrefixDecorator';
import { optionsDecorator } from 'decorators/class/OptionsDecorator';
import { activityDecorator } from 'decorators/class/ActivityDecorator';
import { statusDecorator } from 'decorators/class/StatusDecorator';
import { commandDecorator } from 'decorators/method/CommandDecorator';
import { eventDecorator } from 'decorators/method/EventDecorator';

export abstract class Bot extends Controller {
    constructor(token: string, login = true) {
        super();
        this.client.token = token;

        if (login) {
            void this.client.login();
        }
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

    protected static activity(presence: ActivityOptions): ClassDecorator {
        return activityDecorator(presence);
    }

    protected static status(status: PresenceStatusData): ClassDecorator {
        return statusDecorator(status);
    }

    protected static command(options: CommandOptions = {}): MethodDecorator {
        return commandDecorator(options);
    }

    protected static on(event?: keyof ClientEvents): MethodDecorator {
        return eventDecorator(event);
    }
}
