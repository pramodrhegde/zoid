type ExportsConfigDefinition = {} | [string];
type ExportsMapperDefinition<X> = any;
type ExportsDefinition<X> = any;
type ComponentOptionsType<P, X, C> = any;
type AttributesType = any;
type NormalizedComponentOptionsType<P, X, C> = any;
type ZoidComponentInstance<P, X = void, C = void> = any;
type ZoidComponent<P, X = void, C = void> = {
    (props?: any): any;
    driver: <T>(string: any, mixed: any) => T;
    isChild: () => boolean;
    xprops?: any;
    canRenderTo: (CrossDomainWindowType: any) => any;
    instances: any;
};
export {};
