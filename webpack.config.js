const path = require('path');
const GrpcWebPlugin = require('grpc-webpack-plugin');

const PROTOS_SRC_DIR = path.resolve(__dirname, './api/protos');
const PROTOS_OUT_DIR = path.resolve(__dirname, './lith/web-client/protos-gen/api/protos');

module.exports = {
	entry: './lith/web-client/src/index.js',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, './lith/web-client/dist'),
	},
	mode: 'development',
	resolve: {
		modules: [
			'./protos-gen',
			'node_modules',
			'./bazel-bin/api/protos/lith_service_js_proto_pb',
			'./bazel-bin/api/protos/lith_service_js_grpc_pb',
		]
	},
};
