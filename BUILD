cc_binary(
  name = "server",
  srcs = ["main.cc"],
  deps = [
    "@com_github_google_glog//:glog",
    "//lith/server:server",
  ],
)

filegroup(
  name = "client",
  srcs = [
    "//lith/web-client:client",
  ],
)