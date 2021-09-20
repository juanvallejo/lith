import * as grpcWeb from 'grpc-web';

import * as lith_service_pb from './lith_service_pb';


export class LithServerServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  get(
    request: lith_service_pb.GetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: lith_service_pb.GetResponse) => void
  ): grpcWeb.ClientReadableStream<lith_service_pb.GetResponse>;

}

export class LithServerServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  get(
    request: lith_service_pb.GetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<lith_service_pb.GetResponse>;

}

