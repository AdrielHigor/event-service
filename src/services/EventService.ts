import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import Event from '../db/models/Event';
import EventRepository from '../repositories/EventRepository';
import { Pagination } from '../utils/pagination';
import LocationRepository from '../repositories/LocationRepository';

@injectable()
export class EventService {
  constructor(@inject('EventRepository') private eventRepository: EventRepository, @inject('LocationRepository') private locationRepository: LocationRepository) { }

  async selectAll(req: Request, res: Response): Promise<Array<Event>> {
    return this.eventRepository.findAll();
  }

  async selectById(req: Request, res: Response): Promise<Event | null> {
    const { id } = req.params;
    return this.eventRepository.findById(Number(id));
  }

  async selectAllPaginated(req: Request, res: Response): Promise<Pagination<Event>> {
    return this.eventRepository.findAllPaginated();
  }

  async createEvent(req: Request, res: Response): Promise<Event> {
    const {
      name,
      description,
      startDateTime,
      endDateTime,
      location: { lat, lng },
    } = req.body;

    const locationObj = await this.locationRepository.create({
      point: { type: 'Point', coordinates: [lng, lat] }
    })

    const objToSave = {
      name,
      description,
      locationId: locationObj.id,
      startDateTime: startDateTime || null,
      endDateTime: endDateTime || null
    }

    return this.eventRepository.create(objToSave);
  }

  async updateById(req: Request, res: Response): Promise<[Number, Event[]]> {
    const { id } = req.params;
    const objToUpdate = req.body;

    return this.eventRepository.update(Number(id), objToUpdate);
  }

  async deleteById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    this.eventRepository.delete(Number(id));

    return res.status(200).send();
  }
}