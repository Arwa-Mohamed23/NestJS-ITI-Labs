import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LogCreationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.method === 'POST' && req.originalUrl === '/todo') {
      const timestamp = new Date().toISOString();
      console.log(`${timestamp} ${JSON.stringify(req.body)}`);
    }
    next();
  }
}