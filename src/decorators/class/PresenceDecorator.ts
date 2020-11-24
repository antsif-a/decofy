import { PresenceData } from 'discord.js';
import { optionsDecorator } from 'decorators/class/OptionsDecorator';

export function presenceDecorator(presence: PresenceData): ClassDecorator {
    return optionsDecorator({ presence });
}
