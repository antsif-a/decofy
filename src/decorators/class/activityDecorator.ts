import { ActivityOptions } from 'discord.js';
import { presenceDecorator } from 'decorators/class/presenceDecorator';

export function activityDecorator(activity: ActivityOptions): ClassDecorator {
    return presenceDecorator({ activity });
}
