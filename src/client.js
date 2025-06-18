const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync('hello.proto', {});
const helloProto = grpc.loadPackageDefinition(packageDefinition).helloworld;

const client = new helloProto.Greeter('localhost:50051', grpc.credentials.createInsecure());

client.sayHello({ name: 'World' }, (error, response) => {
  if (!error) {
    console.log('Greeting:', response.message);
  } else {
    console.error(error);
  }
});
