import { QueueContent } from "../../../broker/domain/entities";
import { EventsSocket } from "../entities/event.types";

export interface SocketRepository {
  connect(): Promise<any>;
  sendEstacion(eventEmit: EventsSocket , data : QueueContent): Promise<void>;
}
