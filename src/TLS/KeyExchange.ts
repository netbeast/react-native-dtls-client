﻿import * as TLSTypes from "./TLSTypes";
import { TLSStruct } from "./TLSStruct";

export type KeyExchangeAlgorithm =
	"dhe_dss" | "dhe_rsa" |
	// forbidden: dh_anon, 
	"rsa" | "dh_dss" | "dh_rsa" |
	"psk" | "dhe_psk" | "rsa_psk"// Server/Client|KeyExchange: see https://tools.ietf.org/html/rfc4279#page-4
	;

export class ServerKeyExchange extends TLSStruct {

	static readonly __specs: {
		[algorithm in KeyExchangeAlgorithm]?: TLSTypes.StructSpec
	} = {
		psk: {
			psk_identity_hint: new TLSTypes.Vector("uint8", 0, 2**16-1)
		}
	}

	constructor(public algorithm: KeyExchangeAlgorithm) {
		super(ServerKeyExchange.__specs[algorithm]);
	}
}


export class ClientKeyExchange extends TLSStruct {

	static readonly __specs: {
		[algorithm in KeyExchangeAlgorithm]?: TLSTypes.StructSpec
	} = {
		psk: {
			psk_identity: new TLSTypes.Vector("uint8", 0, 2 ** 16 - 1)
		}
	}

	constructor(public algorithm: KeyExchangeAlgorithm) {
		super(ClientKeyExchange.__specs[algorithm]);
	}
}