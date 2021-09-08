load("@com_github_grpc_grpc//bazel:cc_grpc_library.bzl", "cc_grpc_library")

proto_library(
    name = "server_proto",
    srcs = ["server.proto"],
    deps = [
        "@googleapi//google/api:annotations_proto",
        "@com_google_protobuf//:descriptor_proto",
        "@com_google_protobuf//:empty_proto",
    ],
)

cc_proto_library(
    name = "server_cc_proto",
    deps = [":server_proto"],
    visibility = ["//visibility:public"],
);

cc_grpc_library(
    name = "server_cc_grpc",
    srcs = [":server_proto"],
    grpc_only = True,
    deps = [
        ":server_cc_proto",
        "@com_github_grpc_grpc//:grpc++",
    ],
    visibility = ["//visibility:public"],
)