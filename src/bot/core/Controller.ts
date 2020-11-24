import { Client } from 'discord.js';
import { Commands } from 'bot/commands/Commands';
import { Initializable } from 'bot/core/Initializable';

export abstract class Controller implements Initializable {
    isInitialized: boolean;
    client: Client;
    commands: Commands;

    initialize(): void {
        this.isInitialized = true;
    }
}
