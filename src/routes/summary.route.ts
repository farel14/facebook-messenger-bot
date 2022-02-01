import { Router } from "express";
import { Summary } from "../controllers/summary.controller";

const summary = Router();

// GET /summary
summary.get("/", Summary.getData);

export default summary
