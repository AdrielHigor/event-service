import "reflect-metadata";
import "./controllers";
import "./db";
import bodyParser from "body-parser";
import Constants from "./utils/constants";
import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";

//Event imports
import { EventService } from "./services/EventService";
import EventRepository from "./repositories/EventRepository";
import Event from "./db/models/Event";

//Location imports
import { LocationService } from "./services/LocationService";
import LocationRepository from "./repositories/LocationRepository";
import Location from "./db/models/Location";

// set up container
let container = new Container();


// set up bidings
container.bind<EventService>('EventService').to(EventService);
container.bind<EventRepository>('EventRepository').to(EventRepository);
container.bind<typeof Event>('EventModel').toConstantValue(Event);

container.bind<LocationService>('LocationService').to(LocationService);
container.bind<LocationRepository>('LocationRepository').to(LocationRepository);
container.bind<typeof Location>('LocationModel').toConstantValue(Location);

// create server
const server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(bodyParser.urlencoded({
    extended: true,
  }));

  app.use(bodyParser.json());
})

let app = server.build();

app.listen(Constants.port, (): void => {
  console.log(`Server started on port ${Constants.port}`);
})