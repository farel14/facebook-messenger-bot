import { WebHook } from "../controllers/webhook.controller";
import express from "express";
const webhook = express.Router();

webhook.post("/", WebHook.postMessage);

// Adds support for GET requests to our webhook
webhook.get("/", WebHook.getVerifyToken);

export default webhook;
