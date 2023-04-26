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

  @httpPost('/')
  private create(@request() req: Request, @response() res: Response, @next() next: NextFunction): Promise<Event> {
    return this.eventService.createEvent(req, res);
  }
}
