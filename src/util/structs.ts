import { Controller } from '../bot/core/controller';
import { Initializable } from '../bot/core/initializable';

export class Structs {
    public static isController(target: unknown): target is Controller {
        return target instanceof Controller;
    }

    public static checkInitialization(target: Initializable): void {
        if (!target.isInitialized) target.initialize();
    }
}
