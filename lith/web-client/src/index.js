import {LithServerServiceClient, GetRequest} 
    from 'api/protos/lith_service_grpc_web_pb.js';
import {ViewRequestType, ViewId} 
   from 'api/protos/req_type_view_pb.js';


const viewId = new ViewId();
viewId.setViewName("home");
viewId.setComSoundMixer();

const viewReq = new ViewRequestType();
viewReq.setViewId(viewId);

const request = new GetRequest();
request.setViewRequest(viewReq);

console.log('Attempting to send request to server...');
const client = new LithServerServiceClient("http://localhost:8000");

client.get(request, {}, function(resp) {
    console.log('>', resp);
});

const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || function() {};
enableDevTools([client]);
