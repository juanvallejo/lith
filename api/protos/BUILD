load("@com_github_grpc_grpc//bazel:cc_grpc_library.bzl", "cc_grpc_library")

proto_library(
    name = "labels_proto",
    srcs = ["labels.proto"],
    deps = [
        "@com_google_protobuf//:descriptor_proto",
    ],
)

proto_library(
    name = "service_proto",
    srcs = ["service.proto"],
    deps = [
        ":labels_proto",
        "@googleapi//google/api:annotations_proto",
        "@com_google_protobuf//:empty_proto",
    ],
)

cc_proto_library(
    name = "service_cc_proto",
    deps = [":service_proto"],
    visibility = ["//visibility:public"],
);

cc_grpc_library(
    name = "service_cc_grpc",
    srcs = [":service_proto"],
    grpc_only = True,
    deps = [
        ":service_cc_proto",
        "@com_github_grpc_grpc//:grpc++",
    ],
    visibility = ["//visibility:public"],
)