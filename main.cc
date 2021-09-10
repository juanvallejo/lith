#include "lith/server/init.h"

// TODO(juanvallejo): turn into absl flags
const std::string service_addr = "0.0.0.0";
const std::string service_port = "8000";

int main(int argc, const char** argv) {
    ::google::InitGoogleLogging(argv[0]);
    return lith::Init(service_addr, service_port);
}