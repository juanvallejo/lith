Envoy GRPC Proxy
================

## Running

The command below will:
  - Remove any existing instances of this envoy container that might already be running.
  - Build a Docker image containing the `envoy.yaml` configuration defined in this directory.
  - Run the newly created image with an Envoy proxy configured to translate GRPC messages
    sent to our GRPC server from a web client.

```
./run.sh
```
