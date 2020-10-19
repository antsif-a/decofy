export interface Decorator {
    (...args: any[]):
        | ClassDecorator
        | PropertyDecorator
        | MethodDecorator
        | ParameterDecorator;
}
