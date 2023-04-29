import { injectable, inject } from "inversify";
import Event from "../db/models/Event";
import Location from "../db/models/Location";

@injectable()
export default class EventRepository {
  private eventModel: typeof Event;
  private locationModel: typeof Location;

  constructor(@inject('EventModel') eventModel: typeof Event, @inject('LocationModel') locationModel: typeof Location) {
    this.eventModel = eventModel;
    this.locationModel = locationModel
  }

  async findAll(): Promise<Array<Event>> {
    return this.eventModel.findAll({
      attributes: { exclude: ["LocationId", "locationId"] },
      include: [
        {
          model: this.locationModel,
          as: 'location',
          required: true,
          attributes: ["id", "point"]
        }
      ],
    });;
  }

  async findAllPaginated() {
    return this.eventModel.findAndCountAll({
      attributes: { exclude: ["LocationId", "locationId"] },
      include: [
        {
          model: this.locationModel,
          as: 'location',
          required: true,
          attributes: ["id", "point"]
        }
      ],
    });
  }

  async findById(id: number): Promise<Event | null> {
    return this.eventModel.findByPk(id);
  }

  async create(data: any): Promise<Event> {
    return this.eventModel.create(data);
  }

  async update(id: number, data: any): Promise<[number, Event[]]> {
    return this.eventModel.update(data, {
      where: { id },
      returning: true,
    });
  }

  async delete(id: number): Promise<number> {
    return this.eventModel.destroy({
      where: { id },
    });
  }
}
