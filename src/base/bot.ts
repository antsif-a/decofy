import { Client } from 'discord.js';
import { Commands } from 'base/structs/commands';
import { Controller } from 'base/structs/controller';
import { Decorators } from '../decorators/decorators';

export abstract class Bot extends Decorators implements Controller {
    isInitialized: boolean;
    client: Client;
    commands: Commands;

    constructor(token: string, login = true) {
        super();
        this.client.token = token;

        if (login) {
            void this.client.login();
        }
    }

    initialize(): void {
        this.client = new Client();
        this.commands = new Commands(this.client);
        this.isInitialized = true;
    }
}
