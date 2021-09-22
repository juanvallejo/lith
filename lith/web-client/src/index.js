import {LithServerServiceClient} 
    from 'api/protos/lith_service_grpc_web_pb.js';
import {GetRequest, ViewRequestType, ViewId} 
   from 'api/protos/request_pb.js';


const viewId = new ViewId();
viewId.setViewName("home");
viewId.setComSoundMixer();

const viewReq = new ViewRequestType();
viewReq.setViewId(viewId);

const request = new GetRequest();
request.setViewRequest(viewReq);

const client = new LithServerServiceClient("http://localhost:8080");

client.get(request, {}, function(err, response) {
    if (err) {
        console.log('ERR', err);
        return;
    }

    console.log('server>', response.getMsg());
});

const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || function() {};
enableDevTools([client]);
