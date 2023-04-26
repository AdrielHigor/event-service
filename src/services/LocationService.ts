import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import Location from '../db/models/Location';
import LocationRepository from '../repositories/LocationRepository';
import { Pagination } from '../utils/pagination';

@injectable()
export class LocationService {
  constructor(@inject('LocationRepository') private locationRepository: LocationRepository) { }

  async selectAllPaginated(req: Request, res: Response): Promise<Pagination<Location>> {
    return this.locationRepository.findAllPaginated();
  }

  async createLocation(req: Request, res: Response): Promise<Location> {
    const { lat, lng } = req.body;
    const objToCreate = {
      point: { type: 'Point', coordinates: [lng, lat] }
    }

    return this.locationRepository.create(objToCreate);
  }
}