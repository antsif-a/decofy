import { Client, ClientOptions, Util } from 'discord.js';
import { Commands } from '../commands';
import { Initializable } from './Initializable';

export abstract class Controller extends Initializable {
    client: Client;
    commands: Commands;

    initialize(): void {
        this.isInitialized = true;
    }

    setOptions(options: ClientOptions): void {
        this.client.options = Util.mergeDefault(this.client.options, options);
    }

    public static isController(target: unknown): target is Controller {
        return target instanceof Controller;
    }
}
