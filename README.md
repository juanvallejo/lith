Lith
====

Work in progress.

# Building

Building the server and client

```
bazel build :all
```

# Running Server

```
bazel run :server
```

# Running GRPC Proxy

We'll need to run a GRPC proxy in order to translate messages sent from the webclient to our GRPC
server and back. Browsers currently do not support GRPC, therefore, we'll be using normal HTTP 2.0,
converting our messages to JSON and back.

### Note
We'll need to install and have Docker running prior to executing the command below.
For more information, see envoy/README.md.

```
cd ./envoy
./run.sh
```

# Running Client

First, install client dependencies

```
npm install
```

Then, compile the client

```
bazel build :client
npx webpack
```

Finally, open `./lith/web-client/index.html` in a browser
