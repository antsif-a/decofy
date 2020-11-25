import { Structs } from 'util/structs';

export function prefixDecorator(prefix: string): ClassDecorator {
    return <T extends Function>(target: T) => {
        if (Structs.isBot(target.prototype)) {
            target.prototype.commands.setPrefix(prefix);
        }

        return target;
    };
}
