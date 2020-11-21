export interface Initializable {
    isInitialized: boolean;

    initialize(): void;
}
