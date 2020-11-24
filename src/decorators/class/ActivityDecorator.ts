import { ActivityOptions } from 'discord.js';
import { presenceDecorator } from 'decorators/class/PresenceDecorator';

export function activityDecorator(activity: ActivityOptions): ClassDecorator {
    return presenceDecorator({ activity });
}
