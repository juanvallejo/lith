workspace(
    name = "lith"
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
  name = "com_google_absl",
  urls = ["https://github.com/abseil/abseil-cpp/archive/8c800bb08d353c73d7dd68538388cf3bd2bcc6d0.zip"],
  strip_prefix = "abseil-cpp-8c800bb08d353c73d7dd68538388cf3bd2bcc6d0",
)

http_archive(
  name = "rules_cc",
  urls = ["https://github.com/bazelbuild/rules_cc/archive/262ebec3c2296296526740db4aefce68c80de7fa.zip"],
  strip_prefix = "rules_cc-262ebec3c2296296526740db4aefce68c80de7fa",
)

http_archive(
    name = "rules_proto",
    strip_prefix = "rules_proto-fcad4680fee127dbd8344e6a961a28eef5820ef4",
    urls = [
        "https://github.com/bazelbuild/rules_proto/archive/fcad4680fee127dbd8344e6a961a28eef5820ef4.tar.gz",
    ],
)

http_archive(
    name = "com_github_grpc_grpc",
    urls = [
        "https://github.com/grpc/grpc/archive/2dfa59e898a50499fdcc1fab209d03d5c2aa7bc0.tar.gz",
    ],
    strip_prefix = "grpc-2dfa59e898a50499fdcc1fab209d03d5c2aa7bc0",
)

http_archive(
    name = "com_github_gflags_gflags",
    sha256 = "34af2f15cf7367513b352bdcd2493ab14ce43692d2dcd9dfc499492966c64dcf",
    strip_prefix = "gflags-2.2.2",
    urls = ["https://github.com/gflags/gflags/archive/v2.2.2.tar.gz"],
)

http_archive(
    name = "com_github_google_glog",
    sha256 = "21bc744fb7f2fa701ee8db339ded7dce4f975d0d55837a97be7d46e8382dea5a",
    strip_prefix = "glog-0.5.0",
    urls = ["https://github.com/google/glog/archive/v0.5.0.zip"],
)

http_archive(
    name = "googleapi",
    sha256 = "51849d3ef693c88eb7692875eb444ef7131502e3fa200f25fc0a37b1e7e55ab5",
    strip_prefix = "googleapis-a111a53c0c6722afcd793b64724ceef7862db5b9",
    url = "https://github.com/googleapis/googleapis/archive/a111a53c0c6722afcd793b64724ceef7862db5b9.zip",
)

http_archive(
    name = "bazel_skylib",
    urls = [
        "https://github.com/bazelbuild/bazel-skylib/releases/download/1.0.3/bazel-skylib-1.0.3.tar.gz",
        "https://mirror.bazel.build/github.com/bazelbuild/bazel-skylib/releases/download/1.0.3/bazel-skylib-1.0.3.tar.gz",
    ],
    sha256 = "1c531376ac7e5a180e0237938a2536de0c54d93f5c278634818e0efc952dd56c",
)

http_archive(
  name = "com_google_googletest",
  urls = ["https://github.com/google/googletest/archive/011959aafddcd30611003de96cfd8d7a7685c700.zip"],
  strip_prefix = "googletest-011959aafddcd30611003de96cfd8d7a7685c700",
)

load("@bazel_skylib//:workspace.bzl", "bazel_skylib_workspace")
bazel_skylib_workspace()

load("@rules_cc//cc:repositories.bzl", "rules_cc_dependencies")
rules_cc_dependencies()

load("@rules_proto//proto:repositories.bzl", "rules_proto_dependencies", "rules_proto_toolchains")
rules_proto_dependencies()
rules_proto_toolchains()

load("@com_github_grpc_grpc//bazel:grpc_deps.bzl", "grpc_deps")
grpc_deps()
load("@com_github_grpc_grpc//bazel:grpc_extra_deps.bzl", "grpc_extra_deps")
grpc_extra_deps()