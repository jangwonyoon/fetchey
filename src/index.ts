export { default as fetchey } from "./lib/core/fetchey";

import { server } from "./mocks/server";

if (process.env.NODE_ENV === "development") {
  server.listen();

  console.log("MSW start in development mode");
} else {
  console.log("MSW is disabled in production mode");
}

server.listen();
