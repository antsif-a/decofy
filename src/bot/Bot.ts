import { Client } from 'discord.js';
import { Commands } from './commands';
import { Controller } from './interfaces';
import { Decorators } from '../decorators';

export abstract class Bot extends Decorators implements Controller {
    isInitialized = false;
    client: Client;
    commands: Commands;

    constructor(token: string) {
        super();
        void this.client.login(token);

        console.log('Constructor executed.');
    }

    initialize(): void {
        this.client = new Client();
        this.commands = new Commands(this.client);
        this.isInitialized = true;

        console.log('Init() executed.');
    }
}
