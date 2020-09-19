import { Commands } from '../commands';
import { Client } from 'discord.js';

export interface Controller {
    client: Client;
    commands: Commands;
}
