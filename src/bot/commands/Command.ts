import { GuildMember, Message, PermissionString } from 'discord.js';

export interface CommandOptions {
    name?: string;
    description?: string;
    category?: string;
    executor?: CommandExecutor;
}

export class Command {
    public name: string;
    public description: string;
    public category: string;
    public executor: CommandExecutor;
    private readonly permissions: PermissionString[];

    private constructor(options: CommandOptions = {}) {
        this.name = options.name;
        this.description = options.description;
        this.category = options.category;
        this.executor = options.executor;
        this.permissions = [];
    }

    permission(...permission: PermissionString[]): this {
        this.permissions.push(...permission);
        return this;
    }

    checkPermissions(member: GuildMember): boolean {
        // TODO: Do it without for-of loop
        for (const permission of this.permissions) {
            if (!member.hasPermission(permission)) {
                return false;
            }
        }

        return true;
    }

    execute(message: Message, ...args: string[]): void {
        this.executor(message, ...args);
    }

    static create(options?: CommandOptions): Command {
        return new this(options);
    }
}

export type CommandExecutor = (message: Message, ...args: string[]) => void;
