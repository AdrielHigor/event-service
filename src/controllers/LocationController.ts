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

import { LocationService } from "../services/LocationService";
import { Pagination } from "../utils/pagination";
import Location from "../db/models/Location";

@controller('/location')
export class LocationController extends BaseHttpController implements interfaces.Controller {
  constructor(@inject('LocationService') private locationService: LocationService) {
    super();

    this.locationService = locationService;
  }

  @httpGet('/')
  private index(@request() req: Request, @response() res: Response, @next() next: NextFunction): Promise<Pagination<Location>> {
    return this.locationService.selectAllPaginated(req, res);
  }

  @httpPost('/')
  private create(@request() req: Request, @response() res: Response, @next() next: NextFunction): Promise<Location> {
    return this.locationService.createLocation(req, res);
  }
}
