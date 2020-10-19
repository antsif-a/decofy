export abstract class Initializable {
    isInitialized = false;

    abstract initialize(): void;

    public static checkInitialization(target: Initializable): void {
        if (!target.isInitialized) target.initialize();
    }
}
