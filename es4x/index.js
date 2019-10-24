/// <reference types="@vertx/core/runtime" />
// @ts-check

// your code goes here...

vertx
  .createHttpServer()
  .requestHandler(function (req) {
    req.response()
      .putHeader("content-type", "text/plain")
      .end("Hello from es4x!");
  })
  .listen(3030);

console.log('Server listening at: http://localhost:3030/');
