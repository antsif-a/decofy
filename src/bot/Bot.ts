import { Client } from 'discord.js';
import { Commands } from './commands';
import { Annotations } from '../annotations';
import { Controller, Initializable } from './interfaces';

export class Bot implements Controller, Initializable {
    isInitialized: boolean = false;
    client: Client;
    commands: Commands;

    constructor(token: string) {
        void this.client.login(token);

        console.log('Constructor executed.');
    }

    initialize() {
        this.client = new Client();
        this.commands = new Commands(this.client);

        this.isInitialized = true;

        console.log('Init() executed.');
    }
}
