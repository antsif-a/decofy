import { Initializable } from 'base/structs/initializable';
import { Bot } from 'base/bot';

export class Structs {
    public static isBot(target: unknown): target is Bot {
        return target instanceof Bot;
    }

    public static requireInit(target: Initializable): void {
        if (!target.isInitialized) target.initialize();
    }
}
