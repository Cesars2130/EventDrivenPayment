import { QueueContent } from "../../../broker/domain/entities";
import { EventsSocket } from "../../domain/entities/event.types";
import { SocketRepository } from "../../domain/repositories/socketRepository";

export class SendDataService {
  constructor(private readonly socketRepository: SocketRepository) {}
  async run(eventEmit: EventsSocket, data: QueueContent) {
    try {
      await this.socketRepository.sendEstacion(eventEmit, data);
      console.log("Sent Estacion");
    } catch (err: any) {
      throw new Error(err);
    }
  }
}
