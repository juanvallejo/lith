#include "server.h"

#include <iostream>
#include <string>

#include <glog/logging.h>
#include <grpcpp/grpcpp.h>

#include "api/protos/lith_service.grpc.pb.h"
#include "api/protos/lith_service.pb.h"
#include "absl/strings/str_join.h"

using grpc::Server;
using grpc::ServerBuilder;
using grpc::Status;
using grpc::ServerContext;
using lith::GetRequest;
using lith::GetResponse;
using lith::LithServerService;

namespace lith {

static bool _lith_service_started = false;

static int Init(absl::string_view address, absl::string_view port) {
    if (_lith_service_started) {
        LOG(ERROR) << "Multiple instances of the Lith service cannot be "
                      "initialized";
        return 1;
    }

    _lith_service_started = true;
    LOG(ERROR) << "Attempting to initialize service...";

    std::string full_addr = absl::StrCat(address, ":", port);

    LithServerServiceImpl service;

    ServerBuilder builder;
    builder.AddListeningPort(full_addr, grpc::InsecureServerCredentials());
    builder.RegisterService(&service);

    std::unique_ptr<Server> server(builder.BuildAndStart());
    if (!server.get()) {
        LOG(ERROR) << "Service initialization error."; 
        return 1;
    }

    LOG(ERROR) << "Listening at " << full_addr;

    server->Wait();
    return 0;
}

} //  lith
