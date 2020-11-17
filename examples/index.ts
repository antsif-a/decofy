/* eslint-disable */

import { Message } from 'discord.js';
import { Bot } from '../src';
import { token } from './config.json';

@Bot.prefix('$')
class MyBot extends Bot {
    @Bot.command()
    ping(message: Message): void {
        void message.channel.send('Pong!');
    }

    @Bot.command()
    say(message: Message, ...words: string[]): void {
        void message.channel.send(words.join(' '));
    }

    @Bot.command({ permissions: ['ADMINISTRATOR'] })
    admin(message: Message): void {
        void message.channel.send('Done admin action.');
    }

    @Bot.on('ready')
    ready(): void {
        console.log('Bot started.');
    }
}

 new MyBot(token);
