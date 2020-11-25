import { Client } from 'discord.js';
import { Commands } from 'base/structs/commands';
import { Initializable } from 'base/structs/initializable';

export abstract class Controller implements Initializable {
    isInitialized: boolean;
    client: Client;
    commands: Commands;

    initialize(): void {
        this.isInitialized = true;
    }
}
