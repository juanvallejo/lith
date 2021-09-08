#include <iostream>
#include <string>
#include <vector>

#include <grpcpp/grpcpp.h>

#include "api/protos/service.grpc.pb.h"
#include "api/protos/service.pb.h"
#include "absl/strings/str_join.h"

using grpc::Server;
using grpc::ServerBuilder;
using grpc::Status;
using grpc::ServerContext;
using streamingserver::GetRequest;
using streamingserver::GetResponse;
using streamingserver::StreamingServerService;

class StreamingServerServiceImpl final :
public StreamingServerService::Service {
    Status
    Get(ServerContext* ctx, const GetRequest* req, GetResponse* res) override {
        std::string prefix("Hello");
        return Status::OK;
    }
};

int Run() {
    std::cout << "Attempting to initialize service..." << std::endl;

    std::string address = "0.0.0.0";
    std::string port = "8000";
    std::string full_addr = absl::StrCat(address, ":", port);

    StreamingServerServiceImpl service;

    ServerBuilder builder;
    builder.AddListeningPort(full_addr, grpc::InsecureServerCredentials());
    builder.RegisterService(&service);

    std::unique_ptr<Server> server(builder.BuildAndStart());
    if (!server.get()) {
        std::cout << "Service initialization error." << std::endl;
        return 1;
    }

    std::cout << "Listening at " << full_addr << std::endl;

    server->Wait();
    return 0;
}

int main() {
    return Run();
}