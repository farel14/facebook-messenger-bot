// Imports dependencies
import express from "express";
import { urlencoded, json } from "body-parser";
import dotenv from "dotenv";
import { routers } from "./routes/index.route";

// invoke main function
(() => {
  // setting up environment variables
  dotenv.config();

  const app = express();

  // Parse application/x-www-form-urlencoded
  app.use(urlencoded({ extended: true }));

  // Parse application/json.
  app.use(json());

  // Serving static files
  app.use(express.static("public"));

  // Implement express routing
  app.use('/', routers)

  // Sets server port and logs message on success
  app.listen(process.env.PORT || 3000, () =>
    console.log("webhook is listening at port", process.env.PORT || 3000)
  );
})();
