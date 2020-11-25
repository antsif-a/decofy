import {
    ActivityOptions,
    Client,
    ClientEvents,
    ClientOptions,
    PresenceStatusData,
} from 'discord.js';
import { CommandOptions } from 'base/structs/command';
import { Commands } from 'base/structs/commands';
import { Controller } from 'base/structs/controller';
import { prefixDecorator } from 'decorators/class/prefixDecorator';
import { optionsDecorator } from 'decorators/class/optionsDecorator';
import { activityDecorator } from 'decorators/class/activityDecorator';
import { statusDecorator } from 'decorators/class/statusDecorator';
import { commandDecorator } from 'decorators/method/commandDecorator';
import { eventDecorator } from 'decorators/method/eventDecorator';

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
