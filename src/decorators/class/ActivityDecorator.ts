import { ActivityOptions } from 'discord.js';
import { presenceDecorator } from './PresenceDecorator';

export function activityDecorator(activity: ActivityOptions): ClassDecorator {
    return presenceDecorator({ activity });
}
