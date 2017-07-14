/// <reference types="node" />
import * as TypeSpecs from "../TLS/TypeSpecs";
import { TLSStruct } from "../TLS/TLSStruct";
import { ProtocolVersion } from "../TLS/ProtocolVersion";
import { ContentType } from "../TLS/ContentType";
import { DTLSPacket } from "./DTLSPacket";
export declare class DTLSCiphertext extends TLSStruct implements DTLSPacket {
    type: ContentType;
    version: ProtocolVersion;
    epoch: number;
    sequence_number: number;
    fragment: Buffer;
    static readonly __spec: {
        type: TypeSpecs.Enum;
        version: TypeSpecs.Struct;
        epoch: Readonly<TypeSpecs.Number>;
        sequence_number: Readonly<TypeSpecs.Number>;
        fragment: TypeSpecs.Buffer;
    };
    static readonly spec: TypeSpecs.Struct;
    constructor(type: ContentType, version: ProtocolVersion, epoch: number, sequence_number: number, fragment: Buffer);
    static createEmpty(): DTLSCiphertext;
}
