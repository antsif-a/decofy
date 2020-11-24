import { Structs } from 'util/Structs';

export function prefixDecorator(prefix: string): ClassDecorator {
    return <T extends Function>(target: T) => {
        if (Structs.isController(target.prototype)) {
            target.prototype.commands.setPrefix(prefix);
        }

        return target;
    };
}
