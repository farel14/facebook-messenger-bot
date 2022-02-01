import { Request, Response } from "express";
import fs from 'fs'

export class Summary {
  static getData(req: Request, res: Response) {  

    // without db, reading from file
    const data = fs.readFileSync('src/data/summary.json', 'utf8')
    const jsonData = JSON.parse(data)
    res.json(jsonData)    
  }
}
