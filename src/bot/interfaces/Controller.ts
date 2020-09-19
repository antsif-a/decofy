import { Client } from 'discord.js';
import { Commands } from '../commands';

export interface Controller {
    client: Client;
    commands: Commands;
}
