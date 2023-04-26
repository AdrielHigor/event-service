import { injectable, inject } from "inversify";
import Event from "../db/models/Event";

@injectable()
export default class EventRepository {
  private model: typeof Event;

  constructor(@inject('EventModel') model: typeof Event) {
    this.model = model;
  }

  async findAll(): Promise<Array<Event>> {
    return this.model.findAll();
  }

  async findAllPaginated() {
    return this.model.findAndCountAll();
  }

  async findById(id: number): Promise<Event | null> {
    return this.model.findByPk(id);
  }

  async create(data: any): Promise<Event> {
    return this.model.create(data);
  }

  async update(id: number, data: any): Promise<[number, Event[]]> {
    return this.model.update(data, {
      where: { id },
      returning: true,
    });
  }

  async delete(id: number): Promise<number> {
    return this.model.destroy({
      where: { id },
    });
  }
}
