import { Client } from 'discord.js';
import { Commands } from '../commands';
import { Initializable } from './Initializable';

export abstract class Controller extends Initializable {
    client: Client;
    commands: Commands;

    public static isController(target: unknown): target is Controller {
        return target instanceof Controller;
    }
}
