/**
 * @fileoverview gRPC-Web generated client stub for lith
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var deleteme_pb = require('./deleteme_pb.js')
const proto = {};
proto.lith = require('./lith_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.lith.LithServerServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.lith.LithServerServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.lith.GetRequest,
 *   !proto.lith.GetResponse>}
 */
const methodDescriptor_LithServerService_Get = new grpc.web.MethodDescriptor(
  '/lith.LithServerService/Get',
  grpc.web.MethodType.UNARY,
  proto.lith.GetRequest,
  proto.lith.GetResponse,
  /**
   * @param {!proto.lith.GetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.lith.GetResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.lith.GetRequest,
 *   !proto.lith.GetResponse>}
 */
const methodInfo_LithServerService_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.lith.GetResponse,
  /**
   * @param {!proto.lith.GetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.lith.GetResponse.deserializeBinary
);


/**
 * @param {!proto.lith.GetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.lith.GetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.lith.GetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.lith.LithServerServiceClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/lith.LithServerService/Get',
      request,
      metadata || {},
      methodDescriptor_LithServerService_Get,
      callback);
};


/**
 * @param {!proto.lith.GetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.lith.GetResponse>}
 *     Promise that resolves to the response
 */
proto.lith.LithServerServicePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/lith.LithServerService/Get',
      request,
      metadata || {},
      methodDescriptor_LithServerService_Get);
};


module.exports = proto.lith;

