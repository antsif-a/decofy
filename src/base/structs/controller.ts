import { Client } from 'discord.js';
import { Commands } from 'base/structs/commands';
import { Initializable } from 'base/structs/initializable';

export interface Controller extends Initializable {
    client: Client;
    commands: Commands;
}
