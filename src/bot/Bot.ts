import { Client } from 'discord.js';
import { Commands } from './commands';
import { Controller, Initializable } from './interfaces';

export abstract class Bot implements Controller, Initializable {
    isInitialized = false;
    client: Client;
    commands: Commands;

    constructor(token: string) {
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
