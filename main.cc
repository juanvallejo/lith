#include "lith/server/init.h"

int main(int argc, const char** argv) {
    ::google::InitGoogleLogging(argv[0]);
    return lith::Init();
}