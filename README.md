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

# Running Client

First, install client dependencies

```
npm install
```

Then, compile the client

```
npx webpack
```

Finally, open `./lith/web-client/index.html` in a browser