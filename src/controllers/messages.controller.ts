import { Request, Response } from "express";

export class Message {
  static getHelloWorld(req: Request, res: Response) {
    res.send("Hello World from messages!");
  }

  static getMessageId(req: Request, res: Response) {
    const messageId = req.params.id;
    res.send(`Messages with ID ${messageId} received`);
  }
}
