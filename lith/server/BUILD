cc_library(
    name = "server",
    srcs = [
        "server.cc",
    ],
    hdrs = [
        "server.h",
        "init.h"
    ],
    deps = [
        "@com_github_google_glog//:glog",
        "@com_google_absl//absl/strings",
        "//api/protos:lith_service_cc_proto",
        "//api/protos:lith_service_cc_grpc",
    ],
    visibility = ["//visibility:public"],
)