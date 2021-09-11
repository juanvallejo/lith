load("@com_github_grpc_grpc//bazel:cc_grpc_library.bzl", "cc_grpc_library")
load("@rules_proto_grpc//js:defs.bzl", "js_grpc_web_library")
load("@rules_proto_grpc//js:defs.bzl", "js_proto_library")


proto_library(
    name = "labels_proto",
    srcs = ["labels.proto"],
    deps = [
        "@com_google_protobuf//:descriptor_proto",
    ],
)

proto_library(
    name = "req_type_view_proto",
    srcs = ["req_type_view.proto"],
    deps = [
        ":labels_proto",
        "@googleapi//google/api:annotations_proto",
        "@com_google_protobuf//:empty_proto",
    ],
)

proto_library(
    name = "lith_service_proto",
    srcs = ["lith_service.proto"],
    deps = [
        ":req_type_view_proto",
        "@googleapi//google/api:annotations_proto",
    ],
)

# public targets
cc_proto_library(
    name = "lith_service_cc_proto",
    deps = [":lith_service_proto"],
    visibility = ["//visibility:public"],
);

cc_grpc_library(
    name = "lith_service_cc_grpc",
    srcs = [":lith_service_proto"],
    grpc_only = True,
    deps = [
        ":lith_service_cc_proto",
        "@com_github_grpc_grpc//:grpc++",
    ],
    visibility = ["//visibility:public"],
)

js_proto_library(
    name = "lith_service_js_proto",
    deps = [":lith_service_proto"],
    visibility = ["//visibility:public"],
)

