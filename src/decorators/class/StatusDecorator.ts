import { PresenceStatusData } from 'discord.js';
import { presenceDecorator } from 'decorators/class/PresenceDecorator';

export function statusDecorator(status: PresenceStatusData): ClassDecorator {
    return presenceDecorator({ status });
}
