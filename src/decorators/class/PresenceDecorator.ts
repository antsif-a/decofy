import { PresenceData } from 'discord.js';
import { optionsDecorator } from './OptionsDecorator';

export function presenceDecorator(presence: PresenceData): ClassDecorator {
    return optionsDecorator({ presence });
}
