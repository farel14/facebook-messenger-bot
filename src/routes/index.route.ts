// Import dependencies
import express from "express";

// Import all the routes
import messages from "./messages.route";
import summary from "./summary.route";
import webhook from './webhook.route'

const router = express.Router();

// Main route
router.get("/", (req, res) => {
  return res.send("Hello World!");
});

// Routes
router.use('/webhook', webhook)
router.use('/messages', messages)
router.use("/summary", summary);

export { router as routers };
