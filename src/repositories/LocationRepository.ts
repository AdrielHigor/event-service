import { injectable, inject } from "inversify";
import Location from "../db/models/Location";

@injectable()
export default class LocationRepository {
  private model: typeof Location;

  constructor(@inject('LocationModel') model: typeof Location) {
    this.model = model;
  }

  async findAll(): Promise<Array<Location>> {
    return this.model.findAll();
  }

  async findAllPaginated() {
    return this.model.findAndCountAll();
  }

  async findById(id: number): Promise<Location | null> {
    return this.model.findByPk(id);
  }

  async create(data: any): Promise<Location> {
    return this.model.create(data);
  }

  async update(id: number, data: any): Promise<[number, Location[]]> {
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
