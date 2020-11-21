import { Client } from 'discord.js';
import { Commands } from '../commands';
import { Initializable } from './Initializable';

export abstract class Controller implements Initializable {
    isInitialized: boolean;
    client: Client;
    commands: Commands;

    initialize(): void {
        this.isInitialized = true;
    }
}
