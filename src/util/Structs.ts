import { Controller } from '../bot/core/Controller';
import { Initializable } from '../bot/core/Initializable';

export class Structs {
    public static isController(target: unknown): target is Controller {
        return target instanceof Controller;
    }

    public static checkInitialization(target: Initializable): void {
        if (!target.isInitialized) target.initialize();
    }
}
