import { SendMessageService } from "../../../shared/broker/application/services/sendMessage.service";
import {
  QueueName,
} from "../../../shared/broker/domain/entities";
import { SendDataService } from "../../../shared/socket/application/services/sendData.service";
import { EventsSocket } from "../../../shared/socket/domain/entities/event.types";

export class CreatePaymentService {
  constructor(
    private readonly sendMessageService: SendMessageService,
    private readonly sendEstacionService: SendDataService
  ) {}
  async run(order: any): Promise<void> {
    try {
      const payment = {
        noti: `Te has Suscrito con éxtio a La Estacion: ${order?.name} en la Zona: ${order?.zone}`,
        ...order,
      };
      await this.sendMessageService.run(payment, QueueName.APP_PAYMENT);
      await this.sendEstacionService.run(EventsSocket.SEND_ESTACION, payment);
    } catch (err: any) {
      console.log(err);
      throw new Error(err);
    }
  }
}
