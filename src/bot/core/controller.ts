import { Client } from 'discord.js';
import { Commands } from 'bot/commands/commands';
import { Initializable } from 'bot/core/initializable';

export abstract class Controller implements Initializable {
    isInitialized: boolean;
    client: Client;
    commands: Commands;

    initialize(): void {
        this.isInitialized = true;
    }
}
