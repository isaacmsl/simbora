import { Injectable } from '@nestjs/common';
import { WppconnectService } from 'src/wppconnect/wppconnect.service';
import axios from 'axios';

const SIMBORA_API_URI = String(process.env.SIMBORA_API_URI);

@Injectable()
export class MessagesService {
  constructor(private readonly wppconnectService: WppconnectService) {}

  async handleMessage() {
    const client = this.wppconnectService.getClient();
    if (!client) {
      throw new Error('Client not initialized');
    }

    client.onMessage(async (message) => {
      const response = await axios.get(SIMBORA_API_URI, {
        params: {
          query: message.body
        }
      });
      const answer = response.data;
      client
        .sendText(message.from, answer)
        .then((result) => {
          console.log(message);
          console.log('Result: ', result);
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro);
        });
    });
  }
}
