import { Request, Response, NextFunction } from "express";
import {
  controller,
  interfaces,
  httpGet,
  request,
  response,
  next,
  BaseHttpController,
  httpPost,
  httpPut,
  httpDelete,
} from 'inversify-express-utils';
import { inject } from 'inversify';

import { EventService } from "../services/EventService";
import { Pagination } from "../utils/pagination";
import Event from "../db/models/Event";

@controller('/event')
export class EventController extends BaseHttpController implements interfaces.Controller {
  constructor(@inject('EventService') private eventService: EventService) {
    super();

    this.eventService = eventService;
  }

  @httpGet('/')
  private index(@request() req: Request, @response() res: Response, @next() next: NextFunction): Promise<Pagination<Event>> {
    return this.eventService.selectAllPaginated(req, res);
  }

  @httpGet('/all')
  private findAll(@request() req: Request, @response() res: Response, @next() next: NextFunction): Promise<Array<Event>> {
    return this.eventService.selectAll(req, res);
  }

  @httpGet('/:id')
  private findById(@request() req: Request, @response() res: Response, @next() next: NextFunction): Promise<Event | null> {
    return this.eventService.selectById(req, res);
  }

  @httpPost('/')
  private create(@request() req: Request, @response() res: Response, @next() next: NextFunction): Promise<Event> {
    return this.eventService.createEvent(req, res);
  }

  @httpPut('/:id')
  private updateById(@request() req: Request, @response() res: Response, @next() next: NextFunction): Promise<[Number, Event[]]> {
    return this.eventService.updateById(req, res);
  }

  @httpDelete('/:id')
  private deleteById(@request() req: Request, @response() res: Response, @next() next: NextFunction): Promise<Response> {
    return this.eventService.deleteById(req, res);
  }
}
