import { Client } from 'discord.js';
import { Commands } from '../commands';
import { Initializable } from './Initializable';

export interface Controller extends Initializable {
    client: Client;
    commands: Commands;
}
