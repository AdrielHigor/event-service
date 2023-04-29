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

  async selectById(req: Request, res: Response): Promise<Location | null> {
    const { id } = req.params;
    return this.locationRepository.findById(Number(id));
  }

  async createLocation(req: Request, res: Response): Promise<Location> {
    const { lat, lng } = req.body;
    const objToCreate = {
      point: { type: 'Point', coordinates: [lng, lat] }
    }

    return this.locationRepository.create(objToCreate);
  }

  async updateById(req: Request, res: Response): Promise<[Number, Location[]]> {
    const { id } = req.params;
    const objToUpdate = req.body;

    return this.locationRepository.update(Number(id), objToUpdate);
  }

  async deleteById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    this.locationRepository.delete(Number(id));

    return res.status(200);
  }
}