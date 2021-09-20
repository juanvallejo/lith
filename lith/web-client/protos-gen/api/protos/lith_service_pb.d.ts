import * as jspb from 'google-protobuf'

import * as deleteme_pb from './deleteme_pb';


export class GetRequest extends jspb.Message {
  getViewRequest(): string;
  setViewRequest(value: string): GetRequest;

  getWow(): deleteme_pb.Deleteme | undefined;
  setWow(value?: deleteme_pb.Deleteme): GetRequest;
  hasWow(): boolean;
  clearWow(): GetRequest;

  getReqTypeCase(): GetRequest.ReqTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRequest): GetRequest.AsObject;
  static serializeBinaryToWriter(message: GetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRequest;
  static deserializeBinaryFromReader(message: GetRequest, reader: jspb.BinaryReader): GetRequest;
}

export namespace GetRequest {
  export type AsObject = {
    viewRequest: string,
    wow?: deleteme_pb.Deleteme.AsObject,
  }

  export enum ReqTypeCase { 
    REQ_TYPE_NOT_SET = 0,
    VIEW_REQUEST = 1,
    WOW = 2,
  }
}

export class GetResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResponse): GetResponse.AsObject;
  static serializeBinaryToWriter(message: GetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResponse;
  static deserializeBinaryFromReader(message: GetResponse, reader: jspb.BinaryReader): GetResponse;
}

export namespace GetResponse {
  export type AsObject = {
  }
}

