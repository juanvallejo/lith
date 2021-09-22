load("@com_github_grpc_grpc//bazel:cc_grpc_library.bzl", "cc_grpc_library")
load("@rules_proto_grpc//js:defs.bzl", "js_grpc_web_library", "js_proto_library")

# Contains proto definitions for the lith package
proto_library(
    name = "lith_service_proto",
    srcs = [
        "request.proto"
    ],
    deps = [
        "@googleapi//google/api:annotations_proto",
        "@com_google_protobuf//:empty_proto",
    ],
)

# Contains proto references exclusive to the GRPC service definition.
proto_library(
    name = "lith_service_grpc_proto",
    srcs = [
        "lith_service.proto",
    ],
    deps = [
        ":lith_service_proto",
        "@googleapi//google/api:annotations_proto",
    ],
)

js_proto_library(
    name = "lith_service_js_proto",
    deps = [":lith_service_proto"],
    package_name = "lith_service_js_proto",
)

cc_proto_library(
    name = "lith_service_cc_proto",
    deps = [
        ":lith_service_grpc_proto",
    ],
    visibility = ["//visibility:public"],
)

# public targets

cc_grpc_library(
    name = "lith_service_cc_grpc",
    srcs = [":lith_service_grpc_proto"],
    grpc_only = True,
    deps = [
        ":lith_service_cc_proto",
        "@com_github_grpc_grpc//:grpc++",
    ],
    visibility = ["//visibility:public"],
)

js_grpc_web_library(
    name = "lith_service_js_grpc",
    deps = [":lith_service_js_proto"],
    protos = [":lith_service_grpc_proto"],
    visibility = ["//visibility:public"],
    prefix_path = "../lith_service_js_proto_pb",
)