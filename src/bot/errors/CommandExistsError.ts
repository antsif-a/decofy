export class CommandExistsError extends Error {
    constructor(name: string) {
        super(`Command '${name}' already exist.`);
    }
}
