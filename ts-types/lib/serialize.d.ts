export function getProxyObject<T>(obj: T): any;
export function basicSerialize<T>(data: T): string;
export function basicDeserialize<T>(serializedData: string): T;
export function getUIDRefStore<T>(win: any): {};
export function getUIDRef<T>(val: T): any;
export function getRawRef<T>(val: T): any;
export function getRefValue<T>(win: any, ref: any): T;
export function cleanupRef<T>(win: any, ref: any): void;
export function crossDomainSerialize<T, M>({ data, metaData, sender, receiver, passByReference, basic }: any): CrossDomainSerializedMessage;
export function crossDomainDeserialize<T, M>({ data, sender, basic }: any): any;
type ProxyObject<T> = any;
export namespace REFERENCE_TYPE {
    const UID: string;
    const uid: any;
    const RAW: string;
    const raw: any;
}
type UIDReferenceType = any;
type RawReferenceType<T> = any;
type ReferenceType<T> = any;
type CrossDomainSerializeOptions<T, M> = any;
type CrossDomainSerializedMessage = any;
type CrossDomainDeserializeOptions<M> = any;
type CrossDomainDeserializedMessage<T, M> = any;
export {};
