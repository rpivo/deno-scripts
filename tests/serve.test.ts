Deno.test(
  "alert the user once the server is functional, providing a link to the served port",
  () => {}
);

Deno.test("create a server on localhost:0", () => {});

Deno.test(
  "pick a random localhost port to serve on, so long as that port is not in use",
  () => {}
);

Deno.test(
  "provide an error message if the server could not be created",
  () => {}
);

Deno.test("exit the process if the server could not be created", () => {});

Deno.test(
  "automatically open localhost:0 in the default browser after the server has been created",
  () => {}
);

Deno.test(
  "refresh any open pages in the browser when a new build of the served application is detected",
  () => {}
);

Deno.test(
  "provide feedback in the form of error or warning messages if there are any issues serving any files",
  () => {}
);

Deno.test("provide a flag to set the port", () => {});

Deno.test("provide a flag to disable refresh", () => {});
