#ifndef LITH_SERVER_SERVER_H
#define LITH_SERVER_SERVER_H

#include "api/protos/lith_service.grpc.pb.h"
#include "api/protos/lith_service.pb.h"

using grpc::ServerContext;
using grpc::Status;
using lith::GetRequest;
using lith::GetResponse;
using lith::LithServerService;

namespace lith {

class LithServerServiceImpl final :
public LithServerService::Service {
    Status
    Get(ServerContext* ctx, const GetRequest* req, GetResponse* res) override;

public:
    static int Tes() {
        return 0;
    }
};


}; //  lith
#endif //  LITH_SERVER_SERVER_H