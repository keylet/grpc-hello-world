const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync('hello.proto', {});
const helloProto = grpc.loadPackageDefinition(packageDefinition).helloworld;

function sayHello(call, callback) {
  callback(null, { message: 'Hello ' + call.request.name });
}

const server = new grpc.Server();
server.addService(helloProto.Greeter.service, { sayHello: sayHello });

// Usar bindAsync en lugar de bind
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), (error, port) => {
  if (error) {
    console.error('Error during server binding:', error);
    return;
  }
  // Asegúrate de que esta línea está correcta
  console.log(`Server running at http://0.0.0.0:${port}`);
  server.start();
});
