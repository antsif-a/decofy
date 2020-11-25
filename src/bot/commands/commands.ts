import { Client, Message } from 'discord.js';
import { Command } from 'bot/commands/command';

export class Commands {
    public static readonly defaultPrefix = '!';
    private readonly client: Client;
    private readonly commands: Command[];
    private prefix: string = Commands.defaultPrefix;

    constructor(client: Client) {
        this.client = client;
        this.commands = [];

        this.client.on('message', (message) => this.handle(message));
    }

    private handle(message: Message): void {
        const { content, member } = message;

        if (!content.startsWith(this.prefix)) return;

        const [commandName, ...args] = content.trim().slice(1).split(/ +/);
        const command = this.find(commandName);

        if (command) {
            if (command.checkPermissions(member)) {
                command.execute(message, ...args);
            }
        }
    }

    contains(name: string): boolean {
        return this.find(name) !== null;
    }

    find(name: string): Command | null {
        const command = this.commands.find((c) => c.name === name);
        return command || null;
    }

    all(): Command[] {
        return this.commands;
    }

    each(callback: (command?: Command, index?: number) => void = () => {}): void {
        this.commands.forEach(callback);
    }

    add(...command: Command[]): void {
        this.commands.push(...command);
    }

    setPrefix(prefix: string): void {
        this.prefix = prefix;
    }
}
