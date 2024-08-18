import { Injectable } from '@nestjs/common';
import { WppconnectService } from 'src/wppconnect/wppconnect.service';

@Injectable()
export class MessagesService {
  constructor(private readonly wppconnectService: WppconnectService) {}

  async handleMessage() {
    const client = this.wppconnectService.getClient();
    if (!client) {
      throw new Error('Client not initialized');
    }

    client.onMessage((message) => {
      if (message.body === 'Hello') {
        client
          .sendText(message.from, 'Hello, how I may help you?')
          .then((result) => {
            console.log(message);
            console.log('Result: ', result);
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro);
          });
      }
    });
  }
}
