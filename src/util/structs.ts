import { Controller } from 'base/structs/controller';
import { Initializable } from 'base/structs/initializable';

export class Structs {
    public static isController(target: unknown): target is Controller {
        return target instanceof Controller;
    }

    public static checkInitialization(target: Initializable): void {
        if (!target.isInitialized) target.initialize();
    }
}
