import { PresenceStatusData } from 'discord.js';
import { presenceDecorator } from './PresenceDecorator';

export function statusDecorator(status: PresenceStatusData): ClassDecorator {
    return presenceDecorator({ status });
}
