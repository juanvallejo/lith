#include "server.h"

#include <iostream>
#include <string>

#include <glog/logging.h>

using grpc::Status;
using grpc::ServerContext;
using lith::GetRequest;
using lith::GetResponse;

namespace lith {

Status LithServerServiceImpl::Get(
    ServerContext* ctx, const GetRequest* req, GetResponse* res) {
        res->set_msg("Hello World");
        return Status::OK;
}

}; //  lith