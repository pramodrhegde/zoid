export function getGlobalKey(): string;
export function getGlobal<T>(win: any): T;
export function tryGlobal<T, R>(win: any, handler: (T: any) => R): R;
export function destroyGlobal(): void;
